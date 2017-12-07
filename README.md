# fs-promise-native

[![NPM version](https://img.shields.io/npm/v/fs-promise-native.svg?style=flat-square)](https://www.npmjs.com/package/fs-promise-native)
[![BuildStatus](https://img.shields.io/travis/sparebytes/node-fs-promise-native/master.svg?style=flat-square)](https://travis-ci.org/sparebytes/node-fs-promise-native)

`fs-promise-native` is a zero-dependency module that uses node's built-in `util.promisify` to export thenable versions of `fs` functions. Typescript declarations included.

## Installation

[Node.js](http://nodejs.org/) `>= 8` is required. To install, type this at the command line:
```shell
npm install fs-promise-native
```


## Usage

```js
const fspn = require('fs-promise-native');

// .then
fspn.readFile("./example.txt").then(file => console.log(file));

// async/await
async function example() {
    let file = await fspn.readFile("./example.txt");
    console.log(file));
}

```
