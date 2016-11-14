/* global describe, it, beforeEach */

const Promise = require('bluebird')
const Kyu = require('../lib')

const timeout = (cb, delay) => new Promise(resolve => setTimeout(cb().then(resolve), delay))

const fixture = {
  sampleActions: [
    () => timeout(() => { console.log('dalyyyy'); return Promise.resolve('lmayyy') }, 300),
    (res) => timeout(() => console.log(`lmaooo ${res}`), 750)
  ]
}

describe('Kyu', () => {
  beforeEach(function () {
    this._kyu = new Kyu()
  })

  it('should run in queue', function () {
    this._kyu.addActions(fixture.sampleActions)
    this._kyu.run()
  })
})
