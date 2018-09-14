# koa-feature-policy

Small library for adding a `Feature-Policy` to Koa responses.

--------

## Installation

`npm i koa-feature-policy`

## Usage

```javascript
import featurePolicy from 'koa-feature-policy'

// set up koa

const options = {
  /* directive: allowlist */
  vibrate: ["'self'", 'https://example.com']
}

app.use(featurePolicy(options))

// call app.listen
```

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy) for the full list of directives.

This library converts `camelCase` directives to `lisp-case`. So use
`ambientLightSensor`, not `'ambient-light-sensor'`.

## License

[MIT](./LICENSE.md)
