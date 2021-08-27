const test = require('ava')
const {readFileSync} = require('fs')
const check = require('./helpers/check')

test('engage', t => {
  check(t, readFileSync(__dirname + '/pages/engage.html', 'utf8'),{attr: (name,value) => {
    return name === 'data-tid' && value !== ""
  }})
})


test('backoffice', t => {
  check(t, readFileSync(__dirname + '/pages/backoffice.html', 'utf8'),{attr: (name,value) => {
    return name === 'class' && value !== ""
  }})
})



test('authoring', t => {
  check(t, readFileSync(__dirname + '/pages/authoring.html', 'utf8'),{attr: (name,value) => {
    return name ==='data-tid' && value !== ""
  }})
})