
const { createElement } = require('../src')
const bench = require('fastbench')
const { h } = require('preact')

const run = bench([
  native,
  hyperscript
], Math.pow(10, 3))

function native (done) {
  h('p', { id: 'id', class: 'pad red' }, 'Hello!')
  process.nextTick(done)
}

function hyperscript (done) {
  createElement('p', { id: 'id', class: 'pad red' }, 'Hello!')
  process.nextTick(done)
}

run()
