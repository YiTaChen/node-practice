
var fs = require('fs')

var path = './0x_hello_empty'

console.log('1. read folder: ./0x_hello_empty')

fs.readdir(path, function(err, data){

	if (err) {
		console.log('找不到目錄: ', )
	}
	else
	{
		console.log(data)
	}
})

var path2 = '../01'

console.log('2. read folder: ../01')

fs.readdir(path2, function(err, data){

	if (err) {
		console.log('找不到目錄: ', )
	}
	else
	{
		console.log(data)
	}
})

console.log('3. 發生資料目錄的結果產生在console.log 之後')
console.log('   是因為node 使用fs 核心模組時，會指派出去')
console.log('   然後node 會繼續往下執行，等到收到結果才會print 回來')