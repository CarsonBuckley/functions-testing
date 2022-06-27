let myFunctions = require('./functions')

// basic test
test('return 2 test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('greeting test', () => {
    expect(myFunctions.greeting('Carson')).toBe('Hello, Carson')
})

test('add test', () => {
    expect(myFunctions.add(5, 9)).toBe(14)
})