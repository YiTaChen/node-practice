
console.log('start')

console.log('main 加載 a')
var a_Js = require('./_03-重複加載/a')

console.log('main 加載 b')
var b_Js = require('./_03-重複加載/b')

console.log('main 加載 b => 沒反應')

console.log('=> 因為加載過的 b.js 會被暫存起來(包含exports 成員)')

console.log('=> 所以重新加載, 會把 b.js 成員直接拿來使用, 不會執行程式碼')

console.log('end')
