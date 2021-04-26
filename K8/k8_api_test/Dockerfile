FROM node:10-alpine

WORKDIR /api

COPY . .
RUN npm install @kubernetes/client-node
RUN npm install

EXPOSE 7000

ENTRYPOINT ["node", "apiTest.js"]