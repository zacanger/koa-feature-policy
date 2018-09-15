const koaHeader = require('koa-header')
const formatDirectives = require('object-policy')

module.exports = (opts = {}) => {
  const directives = formatDirectives(opts)
  return koaHeader('Feature-Policy', directives)
}
