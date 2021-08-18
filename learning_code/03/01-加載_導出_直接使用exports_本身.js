
var aExports = require('./_01-加載_導出_js/a')

console.log('使用epxorts 成員')
console.log(aExports.foo)

console.log(aExports.dog)

console.log(aExports.add(1,2))


var exportsCountFun = require('./_01-加載_導出_js/使用exports本人')

console.log('使用epxorts 本人')
console.log(exportsCountFun(10,3))
