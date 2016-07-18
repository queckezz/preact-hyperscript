
const createHelpers = require('hyperscript-helpers')
const parse = require('parse-hyperscript')
const { h } = require('preact')

module.exports = createElement

const helpers = createHelpers(createElement)

Object.keys(helpers).forEach((name) => {
  module.exports[name] = helpers[name]
})

function createElement () {
  const { node, attrs, children } = parse(arguments)
  return h(node, attrs, ...children)
}