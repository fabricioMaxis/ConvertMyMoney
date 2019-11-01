const convert = require('./convert')

test('convert cotaçao 4 and quantidade 4',() =>{
    expect(convert.convert(4,4)).toBe(16)

})
test('convert cotaçao 4 and quantidade 4',() =>{
    expect(convert.convert(0,4)).toBe(0)

})
test('toMoney convert float',() =>{
    expect(convert.toMoney(2)).toBe('2.00')

})
test('toMoney convert strings',() =>{
    expect(convert.toMoney('2')).toBe('2.00')

})