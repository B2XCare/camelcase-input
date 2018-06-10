const camelcase = require('./index.js').camelcase

// console.log('111===', camelcase('foo-bar'))
console.log('222==', JSON.stringify(camelcase([{'foo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })))
// console.log('333==', camelcase({'foo-bar': true}))
