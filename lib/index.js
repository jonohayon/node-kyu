const Promise = require('bluebird')
const uuid = require('uuid').v4

class Kyu {
  constructor (obj) {
    obj = obj || {}
    this._actions = []
    this._promise = obj.promise || Promise
    this._verbose = obj.verbose || true
  }

  addAction () {
    const isString = typeof arguments[0] !== 'string'
    const id = isString ? uuid() : arguments[0]
    const action = arguments[isString ? 0 : 1]
    this._actions.push({ id, action })
    return id
  }

  removeAction (id) {
    const i = this._actions.findIndex(v => v.id === id)
    this._actions.splice(i, 1)
    return i
  }

  addActions (arr) {
    const self = this
    return arr.map(a => self.addAction(a))
  }

  removeActions (arr) {
    const self = this
    return arr.map(id => self.removeAction(id))
  }

  run () {
    return this._actions.map(v => v.action).reduce((prev, curr, i) => {
      return prev.then(res => curr(res))
    }, this._promise.resolve())
  }

  parallel () { return Promise.all(this._actions.map(v => v.action())) }
}

module.exports = Kyu
