

console.log('執行 require ./b ')

var bExports = require('./b')


console.log('直接輸出 bExports ')

console.log(bExports)

console.log('輸出 bExports 其中一個成員 foo :', bExports.foo)

console.log('使用 function add 10, 20 = ', bExports.add(10,20))

console.log( '輸出數字 age = ', bExports.age)

console.log( '輸出文字變數 name = ', bExports.name)

console.log( '輸出 numArray = ', bExports.numArray)

console.log( '輸出 strArray = ', bExports.strArray)


// 當沒有成員的情況如下
console.log('當沒有成員的情況如下')

console.log('執行 require ./c ')

var cExports = require('./c')

console.log('a 執行 console.log(cExports) ')

console.log(cExports)

console.log('var cExports = require(./c) 幾乎等於 c 中的 exports')
