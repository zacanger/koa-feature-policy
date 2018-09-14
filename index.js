module.exports = (opts = {}) => {
  const directives = ''
  return async (ctx, next) => {
    ctx.set('Feature-Policy', directives)
    await next()
  }
}
