FROM httpd:2.4

RUN apt update
RUN apt install vim -y