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

### >=1.0.0 Version of this package requires >=6.0 version of [Node.js](https://nodejs.org/en/download/)

_To Use This Package For Earlier Versions (<6.0) Of Your Node.js Then Download <1.0.0 Version_

## Installation

Install with the node package manager [npm](http://npmjs.org):

- Using npm
  ```shell
  $ npm install camelcase-input --save
  ```
- Using yarn
  ```shell
  $ yarn add camelcase-input
  ```

## How To Use?

### Convert `string` Input

```javascript
const camelcase = require('camelcase-input').camelcase
console.log(camelcase('Foo-Bar'))

/* OUTPUT */
fooBar
```

### Convert `object` Input

```javascript
const camelcase = require('camelcase-input').camelcase
console.log(camelcase({'foo-bar': true}))

/* OUTPUT */
{ fooBar: true }
```

### Convert `array of objects` Input

```javascript
const camelcase = require('camelcase-input').camelcase
console.log(camelcase([{'foo-bar': true}, {'is_that_you': true}]))

/* OUTPUT */
[ { fooBar: true }, { isThatYou: true } ]
```

### Convert `array of string` Input

```javascript
const camelcase = require('camelcase-input').camelcase
console.log(camelcase(['Foo-Bar', 'are-you-there']))

/* OUTPUT */
fooBar, areYouThere
```

### Convert `array of objects` Input `({ deep: true })`

```javascript
const camelcase = require('camelcase-input').camelcase
console.log(camelcase([{'Foo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'Test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })))

/* OUTPUT */
[{ fooBar: [{ abcDfR: true }, { tghdDfdfEe: true }] },{ barFoo: { testTe: { optTdt: dfdfdf } } }]
```

### Convert `string` Input And Remove Digit From Start Of String `({ removeDigitFromStart: true })`

```javascript
/* SAME APPLIES TO Objects, Array, etc. */
const camelcase = require('camelcase-input').camelcase
console.log(camelcase('1. Information12', { deep: true })))

/* OUTPUT */
information12
```

### Convert `string` Input And Remove `()` String If It Contains Atleast One Character

```javascript
/* SAME APPLIES TO Objects, Array, etc. */
const camelcase = require('camelcase-input').camelcase
console.log(camelcase('Information (1 min)', { deep: true })))

/* OUTPUT */
information1Min
```

### Returns `string` Input As It Is If It Does Not Contain Any Character

```javascript
/* SAME APPLIES TO Objects, Array, etc. */
const camelcase = require('camelcase-input').camelcase
console.log(camelcase('2018-06-15 06:00:00', { deep: true })))

/* OUTPUT */
2018-06-15 06:00:00
```

## Changelog

- _1.0.3 remove digit from start of string, remove () from input added_
- _1.0.2 nested object conversion issue resolve_
- _1.0.1 value assign issue fixed_
- _1.0.0 Initial version_
