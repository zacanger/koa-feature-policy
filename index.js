const koaHeader = require('koa-header')
const fixCase = require('zeelib/lib/camel-case-to-lisp-case')

const formatDirectives = (opts = {}) => {
  const directives = Object.keys(opts)
    .reduce((p, c) => {
      const fixed = fixCase(c)
      p[fixed] = opts[c].join(' ')
      return p
    }, {})

  return Object.keys(directives)
    .reduce((p, c) => {
      p += `${c}: ${directives[c]}; `
      return p
    }, '')
}

module.exports = (opts = {}) => {
  const directives = formatDirectives(opts)
  return koaHeader('Feature-Policy', directives)
}
