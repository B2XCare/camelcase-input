const camelcase = require('./index.js').camelcase

// console.log('STRING INPUT=> ', camelcase('Foo-Bar'))
// console.log('222==', JSON.stringify(camelcase([{'FOo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'Test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })))
// console.log('333==', camelcase({'foo-bar': true}))
// console.log('444==', camelcase([{'foo-bar': true}, {'is_that_you': true}]))
// console.log('STRING INPUT=> ', camelcase(['Foo-Bar', 'are-you-there']))
a = { attributes:
{ type: 'Account',
  url: '/services/data/v40.0/sobjects/Account/0012500000qP7qcAAC' },
  Id: '0012500000qP7qcAAC',
  IsDeleted: false,
  MasterRecordId: null,
  Name: 'With Contact',
  Type: null }
console.log('====> ', JSON.stringify(camelcase(a, {deep: true})))
