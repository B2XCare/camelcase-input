# NPM Package To Convert Input Into `lowerCamelcase` Format

<!-- [![Build Status](https://travis-ci.org/Chetan07j/camelcase-input.svg?branch=master)](https://travis-ci.org/Chetan07j/camelcase-input) -->
[![HitCount](http://hits.dwyl.io/chetan07j/camelcase-input.svg)](http://hits.dwyl.io/chetan07j/camelcase-input)
[![Generic badge](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/github/license/chetan07j/camelcase-input.svg)](https://github.com/Chetan07j/camelcase-input/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/chetan07j/camelcase-input.svg)](https://github.com/Chetan07j/camelcase-input/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/chetan07j/camelcase-input.svg)](https://github.com/Chetan07j/camelcase-input/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/chetan07j/camelcase-input.svg)](https://github.com/Chetan07j/camelcase-input/issues?q=is%3Aissue+is%3Aclosed)

[![NPM](https://nodei.co/npm/camelcase-input.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/camelcase-input/)

> Convert your input into lowerCamelcase format, this Node.js module allows you to convert string, array. object into lowerCamelcase.

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
'fooBar', 'areYouThere'
```

## Changelog

- _1.0.0 Initial version_
