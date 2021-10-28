

var fs = require('fs')

// 1.
// 文件操作中的相對路徑可以省略 ./
// ex: './data/a.js' => 'data/a.js' 
fs.readFile('data/a.js',function(err,data){
	if(err) return console.log('讀取失敗')
	console.log(data.toString())
})


// 2.
// 文件操作"只"省略 .
// ex: './data/a.js' => '/data/a.js'
// 會變成直接搜索根目錄底下的路徑 
// 		./data/a.txt  相對於當前目錄
// 		data/a.txt    相對於當前目錄
// 		/data/a.txt   絕對路徑, 當前文件所處的硬碟根目錄
// 		c:/data/a.txt 絕對路徑
fs.readFile('/data/a.js',function(err,data){
	if(err) {
		console.log(err)
		return console.log('讀取失敗')	
	} 
	console.log(data.toString())
})


// 3.
// 在模塊加載中, 相對路徑中的 ./ 不能省略
// require('data/foo.js')  
// 會報錯 Error: Cannot find module 'data/foo.js'

// 正確版 ( .js 可以省略 )
require('./data/foo.js')('直接調用 foo.js function')


// 4.
// require 若是忽略了 '.' 也同等表示硬碟根目錄
// require('/data/foo.js')  // => C:/data/foo.js


