# tilt-example-nodejs

[![Build Status](https://circleci.com/gh/tilt-dev/tilt-example-nodejs/tree/master.svg?style=shield)](https://circleci.com/gh/tilt-dev/tilt-example-nodejs)

An example project that demonstrates how to use Tilt to develop on a NodeJS app (using Express for serving and Mustache for templating).

## Fastest Deployment

This progression of examples shows how to start, and incrementally update your project for the fastest possible update time. Follow along in our [NodeJS example project guide](https://docs.tilt.dev/example_nodejs.html).

- [0-base](0-base): the simplest way to start
- [1-measured](1-measured): use `local_resource` to measure your deployment time
- [2-optimized-dockerfile](2-optimized-dockerfile): be sure to optimize your Dockerfile to make good use of caching
- [3-recommended](3-recommended): use `live_update` for super-fast deploys

## Other Configurations

- [101-debugger](101-debugger): The recommended setup, exposing a debugger on port 9229 that you
  can connect to with your favorite NodeJS debugger (chrome://inspect, VSCode, IntelliJ, etc)
- [tests-example](tests-example): an example of how to use Tilt to run your tests for you as you iterate

## License

Copyright 2022 Docker, Inc.

Licensed under [the Apache License, Version 2.0](LICENSE)
