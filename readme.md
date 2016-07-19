
# preact-hyperscript

> Hyperscript-like syntax for creating Preact elements.

[![Build status][travis-image]][travis-url]
[![NPM version][version-image]][version-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Js Standard Style][standard-image]][standard-url]

## Installation

```bash
> npm install preact-hyperscript
```

## Example

<sub>[→ Try this example on Codepen.io!](http://codepen.io/queckezz/pen/XKkEyj?editors=1010)</sub>

```js
const h = require('preact-hyperscript')
const { render } = require('preact')

const { div, h1, h2, h3, button, ul, li } = h

const App = ({ library }) => div([
  h1('.bold', library),
  h2('#subtitle', 'Preact is a fast, 3kb alternative to React, with the same ES2015 API'),
  button({ href: 'http://ghub.io/preact' }, 'Learn More'),
  h3('Features'),
  ul(['preact', 'small', 'es2015', 'fast'].map(key => li(key)))
])

render(
  h(App, { library: 'Preact' }),
  document.body
)
```

## Tests

```bash
> npm test
```

## License

[MIT][license-url]

[travis-image]: https://img.shields.io/travis/queckezz/preact-hyperscript.svg?style=flat-square
[travis-url]: https://travis-ci.org/queckezz/preact-hyperscript

[version-image]: https://img.shields.io/npm/v/preact-hyperscript.svg?style=flat-square
[version-url]: https://npmjs.org/package/preact-hyperscript

[david-image]: http://img.shields.io/david/queckezz/preact-hyperscript.svg?style=flat-square
[david-url]: https://david-dm.org/queckezz/preact-hyperscript

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: http://img.shields.io/npm/l/preact-hyperscript.svg?style=flat-square
[license-url]: ./license