
const render = require('preact-render-to-string')
const test = require('tape')
const h = require('../src')

test('should create nodes', (t) => {
  const node = h('p.test-class', { id: 'some-id' }, 'Hello World!')
  t.equal(
    render(node),
    '<p id="some-id" class="test-class">Hello World!</p>'
  )
  t.end()
})

test('multiple children', (t) => {
  const node = h('div.container', [
    h('h1', 'title'),
    h('h2.subtitle', 'subtitle')
  ])
  t.equal(
    render(node),
    '<div class="container"><h1>title</h1><h2 class="subtitle">subtitle</h2></div>'
  )
  t.end()
})

test('helpers', (t) => {
  const node = h.h1('test')
  t.equal(render(node), '<h1>test</h1>')
  t.end()
})

test('components', (t) => {
  const App = ({ name }) => h.h1(`Hello ${name}`)
  const node = h(App, { name: 'Fabian' })
  t.equal(render(node), '<h1>Hello Fabian</h1>')
  t.end()
})
