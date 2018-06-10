let chai = require('chai')
let expect = chai.expect
const camelcase = require('../index.js').camelcase

describe('CONVERT INPUT TO lowerCamelcase:', () => {
  it('Should convert string input to lowerCamelcase', (done) => {
    let output = camelcase('Foo-Bar')
    expect(output).to.equal('fooBar')
    done()
  })

  it('Should convert single object input to lowerCamelcase', (done) => {
    let output = camelcase({ 'foo-bar': true })
    expect(output).to.have.property('fooBar')
    done()
  })

  it('Should convert array of objects input to lowerCamelcase', (done) => {
    let output = camelcase([{'foo-bar': true}, {'is_that_you': true}])
    expect(output).to.be.an('array')
    expect(output[0]).to.have.property('fooBar')
    expect(output[1]).to.have.property('isThatYou')
    done()
  })

  it('Should convert array of strings input to lowerCamelcase', (done) => {
    let output = camelcase(['Foo-Bar', 'are-you-there'])
    expect(output).to.be.an('array')
    expect(output).to.be.an('array').that.include('fooBar')
    expect(output).to.be.an('array').that.include('areYouThere')
    done()
  })

  it('Should convert array of objects (deep = true) input to lowerCamelcase', (done) => {
    let output = camelcase([{'FOo-bar': [{'abc-df__r': true}, {'tghd_dfdf--ee': true}]}, {'bar-foo': { 'Test-te': {'opt-tdt': 'dfdfdf'} }}], { deep: true })
    expect(output).to.be.an('array')
    expect(output[0]).to.have.property('fooBar')
    expect(output[0]['fooBar']).to.be.an('array')
    expect(output[0]['fooBar'][0]).to.have.property('abcDfR')
    done()
  })
})
