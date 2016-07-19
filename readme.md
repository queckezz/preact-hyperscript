
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
const { createElement, div, h1, h2, h3, button, ul, li } = require('preact-hyperscript')
const { render } = require('preact')

const h = createElement

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

## Guide

### Component shorthand

Instead of calling `createElement(Component, props)` you can wrap your component into a `createComponent` call and invoke it using `Component(props)` directly:

```js
const { createComponent, h1 } = require('preact-hyperscript')

const App = createComponent((props) => h1(props.text))

render(
  // instead of h(App, { text: 'test' }) you can do:
  App({ text: 'test' }),
  document.body
)
```

### Syntax

Each [element](https://github.com/wooorm/html-tag-names/blob/4604477c3762b7df87536480fb453a9dd7feaaf0/index.json) in the DOM is exposed as a function when requiring `preact-hyperscript`.

```js
const { div, h1, p, button } = require('preact-hyperscript')
```

These functions have the following syntax:

```js
tag(selector, attributes, children)
```

All arguments are **optional** with at least **one argument needing to be present**. This kind of function overloading allows you to iterate on your DOM structure really fast and reduce visual noise.

* **selector** can be a class (prefixed with `.`) or an `id` (prefixed with a `#`). These can be mixed as you might expect: `.title#id.pad.red`
* **attributes** is an object of dom attributes: `{ href: '#header' }`
* **children** can be a string for a text node or an array of nodes

### Built-in sugar

#### Classes

Conditionally joins class names together. It utilizes JedWatson's awesome [classnames](https://github.com/JedWatson/classnames). Visit the [usage docs](https://github.com/JedWatson/classnames#usage) for more information.

#### Inline styles

Automatically converts style objects to a string. For an additional weight of ~400 bytes this is well worth it:

```js
const style = {
  textDecoration: 'underline',
  fontSize: '56px'
}

const node = h1({ style }, 'hello!')
// -> <h1 style='text-decoration:underline;font-size:56px;'>hello!</h1>
```

## Benchmarks

Some basic benchmarks for creating `10^5` nodes:

```bash
> npm run bench
```

```
native*100000: 31.481ms
hyperscript*100000: 114.727ms
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