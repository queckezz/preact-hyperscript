
const createHelpers = require('hyperscript-helpers')
const toInlineStyle = require('./to-inline-style')
const parse = require('parse-hyperscript')
const classNames = require('classnames')
const { h } = require('preact')

exports.createComponent = createComponent
exports.createElement = createElement

const helpers = createHelpers(createElement)

Object.keys(helpers).forEach((name) => {
  module.exports[name] = helpers[name]
})

function createElement () {
  const { node, attrs, children } = parse(arguments)

  for (let key in attrs) {
    attrs[key] = decorate(attrs[key], key)
  }

  return h(node, attrs, children)
}

function decorate (val, name) {
  switch (name) {
    case 'class':
      return classNames(val)
    case 'style':
      return val !== 'string'
        ? toInlineStyle(val)
        : val
    default:
      return val
  }
}

function createComponent (Component) {
  return (...args) => createElement(Component, ...args)
}
