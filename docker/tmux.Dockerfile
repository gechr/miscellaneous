FROM alpine:latest

WORKDIR /tmp

RUN apk update && apk upgrade && \
    apk add python make gcc musl-dev linux-headers bash file curl bsd-compat-headers

ENV dest_prefix /usr

# libevent
ENV libevent_version 2.0.21
ENV libevent_name libevent-$libevent_version-stable
ADD https://github.com/downloads/libevent/libevent/$libevent_name.tar.gz /tmp/$libevent_name.tar.gz
RUN tar xvzf /tmp/$libevent_name.tar.gz && \
    cd $libevent_name && \
    ./configure --prefix=$dest_prefix --disable-shared && \
    make && \
    make install && \
    rm -fr /tmp/$libevent_name.tar.gz /tmp/$libevent_name

# ncurses
ENV ncurses_version 5.9
ENV ncurses_name ncurses-$ncurses_version
RUN curl -LO http://ftp.gnu.org/gnu/ncurses/$ncurses_name.tar.gz -o /tmp/$ncurses_name.tar.gz && \
    tar xvzf /tmp/$ncurses_name.tar.gz && \
    cd $ncurses_name && \
    ./configure --prefix=$dest_prefix --without-cxx --without-cxx-bindings --enable-static && \
    make && \
    make install && \
    rm -fr /tmp/$ncurses_name.tar.gz /tmp/$ncurses_name

# et tmux
ENV tmux_version 2.0
ENV tmux_name tmux-$tmux_version
ENV tmux_url $tmux_name/$tmux_name
ADD https://github.com/tmux/tmux/releases/download/$tmux_version/$tmux_name.tar.gz /tmp/$tmux_name.tar.gz
RUN tar xvzf /tmp/$tmux_name.tar.gz && \
    cd $tmux_name && \
    ./configure --prefix=$dest_prefix CFLAGS="-I$dest_prefix/include -I$dest_prefix/include/ncurses" LDFLAGS="-static -L$dest_prefix/lib -L$dest_prefix/include/ncurses -L$dest_prefix/include" && \
    env CPPFLAGS="-I$dest_prefix/include -I$dest_prefix/include/ncurses" LDFLAGS="-static -L$dest_prefix/lib -L$dest_prefix/include/ncurses -L$dest_prefix/include" make && \
    make install && \
    rm -fr /tmp/$tmux_name.tar.gz /tmp/$tmux_name

RUN file $dest_prefix/bin/tmux
