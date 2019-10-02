FROM node:12-buster

EXPOSE 8080

WORKDIR /usr/app
COPY app.js .
COPY package*.json ./
COPY . .

RUN npm install

VOLUME ["/usr/app"]

ENTRYPOINT ["node", "app.js"]

