.PHONY: in docker upd

DOCK = \
	sudo docker run -it --rm --privileged -e DISPLAY=unix$$DISPLAY \
		-v $(CURDIR):/mnt -v $(CURDIR)/home:/myhome -v /tmp/.X11-unix:/tmp/.X11-unix:ro \
		meld bash -c

in:
	$(DOCK) '\
	NUID=$$(stat --format %u /mnt) && \
	NGID=$$(stat --format %g /mnt) && \
	addgroup --gid $$NGID usergroup && \
	adduser --uid $$NUID --gid $$NGID --disabled-password --gecos "" \
		--no-create-home --home /myhome user && \
	exec sudo -Hiu user bash -c "\
		cd $$PWD && \
		exec bash \
	"\
'

upd:
	$(DOCK) '\
			./emsdk/emsdk install -j3 --build=MinSizeRel sdk-incoming-64bit && \
			./emsdk/emsdk activate --build=MinSizeRel sdk-incoming-64bit && \
	:'

docker:
	/bin/echo -e '\
		FROM ubuntu:14.04.3\n\
		RUN apt-get update\n\
		RUN apt-get install -y meld\n\
		WORKDIR /mnt\n\
' | sudo docker build -t meld --force-rm -
