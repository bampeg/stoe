const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
}) 

test('Multiplies 2 * 2 to equal 4', () => {
  expect(functions.multiply(2, 2)).toBe(4)
})

test('show me the module', () => {
  functions.showMe()
})