

var http = require('http')


var server = http.createServer()



// 裡面沒有東西 回傳給客戶端
// server.on('request' , function(){
// 	console.log("收到客戶端的請求了")
// })

server.on('request', function(request, response){

	console.log('客戶端請求的路徑是 ' + request.url)


	// 如果沒有限制的話, 任何url 都會執行同樣的事情
	// response.write('hello : here is reponse by http node.js good!!')
	// response.write('haha')

	// response.end()

	if(request.url == '/login')
	 {
		response.write("trigger login page~  good!!")
	 	response.end()
	 } 
	 else if(request.url == '/shopping')
	 {
	 	response.write("trigger shopping page~  good!!")
	 	response.end()
	 }
	 else
	 {
	 	response.write("trigger default page")
	 	response.end()
	 }



})




server.listen(3000, function(){

	console.log("服務器啟動成功了, 可以通過 http://127.0.0.1:3000/ 來進行訪問")

})

// 使用 ctrl + c 來取消listen
