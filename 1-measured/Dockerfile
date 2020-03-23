FROM node:10

WORKDIR /app

ADD . .

RUN yarn install

ENTRYPOINT [ "node", "/app/index.js" ]
