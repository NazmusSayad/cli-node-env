# manual-node-env

Simple usages of NODE_ENV

<a href="https://npmjs.com/package/manual-node-env">
  <img src="https://img.shields.io/npm/v/manual-node-env" alt="npm package"> 
</a>

<br/>

# Features

- No configuration
- Lightweight

<br/>

## Installation

- with npm

```shell
npm i manual-node-env
```

- with yarn

```shell
yarn add manual-node-env
```

- with pnpm

```shell
pnpm add manual-node-env
```

<br/>

## Usage:

`/* index.js */`

```js
// Use this package at the top of your entry file

// Esmodules
import 'manual-node-env'
// CommonJS modules
require('manual-node-env')

console.log(process.env.NODE_ENV)

// ...
```

```shell
node index.js --NODE_ENV=production
node index.js --NODE_ENV=development
node index.js --NODE_ENV=whatever
```

---

<br/>

---

Made by [Nazmus Sayad](https://github.com/NazmusSayad) with ❤️.
