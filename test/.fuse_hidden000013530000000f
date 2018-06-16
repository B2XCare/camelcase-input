var chai = require('chai')
var expect = chai.expect
const camelcase = require('../index.js').camelcase

describe('CONVERT INPUT TO lowerCamelcase:', () => {
  it('Should convert string input to lowerCamelcase', (done) => {
    var output = camelcase('Foo-Bar')
    expect(output).to.equal('fooBar')
    done()
  })

  it('Should convert single object input to lowerCamelcase', (done) => {
    var output = camelcase({ 'foo-bar': true })
    expect(output).to.have.property('fooBar')
    done()
  })

  it('Should convert array of objects input to lowerCamelcase', (done) => {
    var output = camelcase([{'foo-bar': true}, {'is_that_you': true}])
    expect(output).to.be.an('array')
    expect(output[0]).to.have.property('fooBar')
    expect(output[1]).to.have.property('isThatYou')
    done()
  })

  it('Should convert array of strings input to lowerCamelcase', (done) => {
    var output = camelcase(['Foo-Bar', 'are-you-there'])
    expect(output).to.be.an('array')
    expect(output).to.be.an('array').that.include('fooBar')
    expect(output).to.be.an('array').that.include('areYouThere')
    done()
  })

  it('Should convert array of objects (deep = true) input to lowerCamelcase', (done) => {
    var output = camelcase([{'Foo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'Test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })
    expect(output).to.be.an('array')
    expect(output[0]).to.have.property('fooBar')
    expect(output[0]['fooBar']).to.be.an('array')
    expect(output[0]['fooBar'][0]).to.have.property('abcDfR')
    done()
  })

  it('Should convert nested objects (deep = true) input to lowerCamelcase', (done) => {
    var output = camelcase({
      attributes: {
        type: 'Account',
        url: '/0012500000qP7qcAAC'
      },
      Id: 'adsff2324',
      IsDeleted: false,
      MasterRecordId: null,
      Name: 'With Contact',
      Type: null
    }, { deep: true })

    expect(output).to.have.property('attributes')
    expect(output['attributes']).to.be.an('object')
    expect(output['attributes']).to.have.property('type')
    expect(output).to.have.property('isDeleted')
    done()
  })

  it('Should remove digit from "start of string" if (removeDigitFromStart = true) and convert string to lowerCamelcase', (done) => {
    var output = camelcase('1. Information12', { deep: true, removeDigitFromStart: true })
    expect(output).to.equal('information12')
    done()
  })

  it('Should remove "()" from string "if it contains atleast 1 character" and convert string to lowerCamelcase', (done) => {
    var output = camelcase('Information (1 min)', { deep: true })
    expect(output).to.equal('information1Min')
    done()
  })

  it('Should return input string as it as if it does not contains any character', (done) => {
    var output = camelcase('2018-06-15 06:00:00', { deep: true })
    expect(output).to.equal('2018-06-15 06:00:00')
    done()
  })
})
