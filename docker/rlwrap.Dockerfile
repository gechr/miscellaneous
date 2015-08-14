# http://pkgs.alpinelinux.org/contents?filename=libpcre%25.a&path=&pkgname=&arch=x86_64
FROM alpine:3.2
RUN apk update && apk add curl build-base ncurses-dev
RUN curl -LO curl -LO http://ftp.gnu.org/gnu/readline/readline-6.3.tar.gz && \
    tar xzf readline-6.3.tar.gz
RUN cd readline-6.3 && ./configure --prefix=/usr && make && make install
RUN curl -LO http://utopia.knoware.nl/~hlub/rlwrap/rlwrap-0.42.tar.gz && \
    tar xzf rlwrap-0.42.tar.gz
RUN cd rlwrap-0.42 && LDFLAGS=-static ./configure && make
