const tape = require('tape')
const featurePolicy = require('./')

const fp = 'Feature-Policy'

const ctx = {
  set (type, data) {
    this[type] = data
  },
  clear () {
    this[fp] = undefined
  }
}

const next = () =>
  Promise.resolve(1)

const d1 = {
  'foo-bar': [ 'baz' ]
}

const d2 = {}

const d3 = {
  oneTwo: [ 'a b c' ],
  quux: [ 'one', 'two', 'three' ]
}

tape.test('featurePolicy', (t) => {
  featurePolicy(d1)(ctx, next)
  t.equal(ctx[fp], 'foo-bar baz;')
  ctx.clear()
  featurePolicy(d2)(ctx, next)
  t.equal(ctx[fp], '')
  ctx.clear()
  featurePolicy()(ctx, next)
  t.equal(ctx[fp], '')
  ctx.clear()
  featurePolicy(d3)(ctx, next)
  t.equal(ctx[fp], 'one-two a b c; quux one two three;')
  t.end()
})
