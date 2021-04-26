FROM node:10-alpine

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "server_hidden.js"]