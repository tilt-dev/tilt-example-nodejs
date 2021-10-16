# Default value; will be overridden by build_args, if passed
ARG base_name=nodeeeee
ARG version=10
FROM ${base_name}:${version}

ARG node_env=development
ENV NODE_ENV $node_env

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD . .

ENTRYPOINT [ "node", "/app/index.js" ]
