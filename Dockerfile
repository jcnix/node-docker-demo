FROM node:12-buster

EXPOSE 8080

WORKDIR /usr/app
COPY app.js .
COPY package.json .
COPY server .
COPY config .

RUN npm install

