FROM node:10

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD . .

ENTRYPOINT [ "yarn", "run", "nodemon", "/app/index.js" ]
