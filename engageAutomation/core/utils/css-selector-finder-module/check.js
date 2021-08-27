const {finder} = require('../..')

module.exports = function check(t, html, config = void 0) {
  document.write(html)

  const list = []

  for (let node of document.querySelectorAll('[data-tid], [class]')) {

    const css = finder(node, config)
	
	console.log("\ncss : " + css)
	console.log("nodeName:" + node.nodeName)
	console.log("nodeText: "+node.textContent)

    t.is(document.querySelectorAll(css).length, 1, `Selector "${css}" selects more then one node.`)
    t.is(document.querySelector(css), node, `Selector "${css}" selects another node.`)

    list.push(css)
	
  }

  t.snapshot(list.join('\n'))

  document.clear()
}

