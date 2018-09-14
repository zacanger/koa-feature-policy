const fixCase = require('zeelib/lib/camel-case-to-lisp-case')

const formatDirectives = (opts = {}) =>
  Object.keys(opts).reduce((p, c) => {
    const fixed = fixCase(c)
    p[fixed] = opts[c].join(' ')
    return p
  }, {})

module.exports = (opts = {}) => {
  const directives = formatDirectives(opts)
  return async (ctx, next) => {
    ctx.set('Feature-Policy', directives)
    await next()
  }
}
