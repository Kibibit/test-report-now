<p align="center">
  <a href="https://github.com/Kibibit/test-report-now" target="blank"><img src="./scooter.svg" width="150" ></a>
  <h2 align="center">
    @kibibit/test-report-now
  </h2>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/test-report-now"><img src="https://img.shields.io/npm/v/@kibibit/test-report-now/latest.svg?style=for-the-badge&logo=npm&color=CB3837"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/test-report-now"><img src="https://img.shields.io/npm/v/@kibibit/test-report-now/next.svg?style=flat-square&logo=npm&color=CB3837"></a>
  <a href="https://travis-ci.org/Kibibit/test-report-now">
  <img src="https://travis-ci.org/Kibibit/test-report-now.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/Kibibit/test-report-now?branch=master">
  <img src="https://coveralls.io/repos/github/Kibibit/test-report-now/badge.svg?branch=master">
  </a>
  <a href="http://greenkeeper.io">
    <img src="https://badges.greenkeeper.io/Kibibit/test-report-now.svg">
  </a>
  <a href="https://salt.bountysource.com/teams/kibibit"><img src="https://img.shields.io/endpoint.svg?url=https://monthly-salt.now.sh/kibibit&style=flat-square"></a>
</p>
<p align="center">
  Deploy test result report to zeit now
</p>
<hr>

This is going to change to push the test report to a github repo instead (since there's a limit on deployment time on zeit now)

## how to use

### Installation

```bash
$ npm install --save @kibibit/test-report-now
```

### Usage

add to your `package.json` a new script:

```json
"scripts": {
  "deploy-tests-report": "kb-reporter"
}
```

and run on travis. This will not be coupled to travis later on

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Neil Kalman](https://github.com/thatkookooguy)

## Contributors

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for [contributing](CONTRIBUTING.MD).

You can check out some easy to start with issues in the [Easy Pick](https://github.com/Kibibit/kb-hologram/labels/Easy%20Pick).

## Contributor Code of Conduct
Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).

By participating in this project you agree to abide by its terms.

## License

[MIT License](LICENSE)

Copyright (c) 2020 Neil Kalman &lt;neilkalman@gmail.com&gt;

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
