const camelcase = require('./index.js').camelcase

// console.log('STRING INPUT=> ', camelcase('Foo-Bar'))
// console.log('222==', JSON.stringify(camelcase([{'FOo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'Test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })))
// console.log('333==', camelcase({'foo-bar': true}))
// console.log('444==', camelcase([{'foo-bar': true}, {'is_that_you': true}]))
// console.log('STRING INPUT=> ', camelcase(['Foo-Bar', 'are-you-there']))
// a = { attributes:
// { type: 'Account',
//   url: '/services/data/v40.0/sobjects/Account/0012500000qP7qcAAC' },
//   Id: '0012500000qP7qcAAC',
//   IsDeleted: false,
//   MasterRecordId: null,
//   Name: 'With Contact',
//   Type: null }
// console.log('====> ', JSON.stringify(camelcase(a, {deep: true})))

b = {
  'Meta Data': {
    '1. Information': 'Intraday (1min) prices and volumes',
    '2. Symbol': 'ZEEL',
    '3. Last Refreshed': '2018-06-15 06:00:00',
    '4. Interval': '1min',
    '5. Output Size': 'Compact',
    '6. Time Zone': 'US/Eastern'
  },
  'Time Series (1min)': {
    '2018-06-15 06:00:00': {
      '1. open': '556.0000',
      '2. high': '556.0000',
      '3. low': '554.8000',
      '4. close': '554.8000',
      '5. volume': '3500'
    }
  }
}

console.log('====> ', JSON.stringify(camelcase(b, { deep: true, removeNumberFromStart: true })))

console.log('====> ', JSON.stringify(camelcase(['Information (1 min)', 'Time Series (1 min)'], { deep: true })))
