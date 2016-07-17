'use strict'

const assert = require('chai').assert
const clri   = require('../index.js')

describe('Rejs', function() {
  beforeEach(function() {
    this.clri = clri
  })

  describe(`run scripts in Sync mode`, function() {
    it(`can run scripts in sync`, function() {
      const run  = this.clri.exec(`echo wow`)
      const run2 = this.clri.exec(`echo lol`)
      const run3 = this.clri.exec(`git status`)

      const promises = [
        run,
        run2,
        run3
      ].reverse

      for (promise in promises) {
        promise.then(e => e)
      }
    })
  })
})
