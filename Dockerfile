FROM node:12-buster

EXPOSE 8080

WORKDIR /usr/app
COPY app.js .

