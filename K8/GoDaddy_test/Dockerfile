FROM node:10-alpine

WORKDIR /api

COPY . .

RUN npm i kubernetes-client --save
RUN npm install

EXPOSE 7000

ENTRYPOINT ["node", "goDaddyTest.js"]