FROM alpine:3.2

RUN apk update && apk add autoconf \
                          automake \
                          build-base \
                          file \
                          git \
                          libtool \
                          ncurses-dev \
                          python

RUN git clone https://github.com/hishamhm/htop

RUN cd htop && \
    git checkout 1.0.3 && \
    ./autogen.sh && \
    ./configure --prefix=/usr LDFLAGS="-static" PKG_CONFIG="pkg-config --static" && \
    make LDFLAGS="-all-static" && \
    make install
