# NPM Package To Convert Input Into `lowerCamelcase` Format

<!-- [![Build Status](https://travis-ci.org/B2XCare/camelcase-input.svg?branch=master)](https://travis-ci.org/B2XCare/camelcase-input) -->
[![HitCount](http://hits.dwyl.io/B2XCare/camelcase-input.svg)](http://hits.dwyl.io/B2XCare/camelcase-input)
[![Generic badge](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/github/license/B2XCare/camelcase-input.svg)](https://github.com/B2XCare/camelcase-input/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/B2XCare/camelcase-input.svg)](https://github.com/B2XCare/camelcase-input/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/B2XCare/camelcase-input.svg)](https://github.com/B2XCare/camelcase-input/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/B2XCare/camelcase-input.svg)](https://github.com/B2XCare/camelcase-input/issues?q=is%3Aissue+is%3Aclosed)

[![NPM](https://nodei.co/npm/camelcase-input.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/camelcase-input/)

> Convert your input into lowerCamelcase format, this Node.js module allows you to convert string, array. object into lowerCamelcase.

## Installation

Install with the node package manager [npm](http://npmjs.org):

- Using npm
  ```shell
  $ npm install @b2xcare/b2x-camelcase-input --save
  ```
- Using yarn
  ```shell
  $ yarn add @b2xcare/b2x-camelcase-input
  ```

## How To Use?

### Convert `string` Input

```javascript
const camelcase = require('@b2xcare/b2x-camelcase-input').camelcase
console.log(camelcase('Foo-Bar'))

/* OUTPUT */
fooBar
```

### Convert `object` Input

```javascript
const camelcase = require('@b2xcare/b2x-camelcase-input').camelcase
console.log(camelcase({'foo-bar': true}))

/* OUTPUT */
{ fooBar: true }
```

### Convert `array of objects` Input

```javascript
const camelcase = require('@b2xcare/b2x-camelcase-input').camelcase
console.log(camelcase([{'foo-bar': true}, {'is_that_you': true}]))

/* OUTPUT */
[ { fooBar: true }, { isThatYou: true } ]
```

### Convert `array of string` Input

```javascript
const camelcase = require('@b2xcare/b2x-camelcase-input').camelcase
console.log(camelcase(['Foo-Bar', 'are-you-there']))

/* OUTPUT */
fooBar, areYouThere
```

### Convert `array of objects` Input `({ deep: true })`

```javascript
const camelcase = require('@b2xcare/b2x-camelcase-input').camelcase
console.log(camelcase([{'FOo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'Test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })))

/* OUTPUT */
[{ fooBar: [{ abcDfR: true }, { tghdDfdfEe: true }] },{ barFoo: { testTe: { optTdt: dfdfdf } } }]
```

## Changelog

- _0.0.1 Initial version_
