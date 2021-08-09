

var foo = 'aaa'

console.log('a start')

console.log('a var foo = ', foo)

console.log('a use require b.js')

require('./b.js')

console.log('now back to a')

console.log('a foo = ', foo)

// 使用反引號 可以在console 直接換行
console.log(`so in node 沒有全域變數 
	相同 foo 只作用與自己內部
	命名相同的 foo 原來的也不會被更動
	`)

console.log('a end')

