

// 用來獲取機器訊息
var os = require('os')

// 用來操作路徑的
var path = require('path')

// 獲取當前機器的 CPU 訊息
console.log(os.cpus())

// 取得 memory 內存
console.log(os.totalmem())

// extname extension name
console.log(path.extname('C:/a/b/c/hello.txt'))


