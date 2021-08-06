
/* 讀取文件

瀏覽器中的JavaScript 是沒有文件操作的能力
but Node 中的JavaScript 具有文件操作的能力

fs 是 file-system 的縮寫，文件系統的意思
如果想要在Node 中進行文件相關的功能操作，就必須引入fs 這個核心模塊

在fs 這個核心模塊中，提供了所有的文件操作相關的API
例如: fs.readFile 就是用來讀取文件的

*/

// 1. 首先使用 require 方法加載 fs 核心模塊

var fs = require('fs')

// 2. 讀取文件
//    第一個參數為文件路徑
//    第二個參數是一個回調函數
/*
	成功
		data 數據
		error null
	失敗
		data null
		error 錯誤對象
*/

// 
fs.readFile('./data/testFile.txt', function(error,data){
	// body...

	// error 處理, ex: 沒讀到檔案會有error code
	if(error){console.log(error)} 

	console.log('直接使用fs.readFile 的data 會顯示16進位碼')
	console.log(data)
	// <Buffer 0d 0a 79 6f 75 20 6c 6f 61 64 20 74 68 69 73 20 66 69 6c 65 20 73 75 63 63 65 73 73 0d 0a 0d 0a 47 6f 6f 64 20 4a 6f 62 21 21>
	// 會是16進位的資料

	console.log('使用toString() 方式轉換')
	console.log(data.toString())
	// 使用toString() 把資料轉換

})


fs.readFile('./data/haha.txt', function(error,data){

	if(error)
	{
		console.log("文件讀取失敗, 失敗訊息如下")
		console.log(error)
	}
	else
	{

	}


})


// or 另一種方法，在一開始 readFile 的時候，直接指定格式
fs.readFile('./data/testFile.txt', 'utf8', function(error,data){
	// body...

	if(error){console.log(error)}

	console.log("使用readFile 指定格式的方式('utf8')")
	console.log(data)

	//console.log(data.toString())	
})



console.log("Good!!")