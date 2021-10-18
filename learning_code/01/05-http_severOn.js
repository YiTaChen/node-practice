

var http = require('http')


var server = http.createServer()


var products = [
	{
		name: '蘋果 x',
		price: 8888
	},
	{
		name: '柳丁 y',
		price: 10
	},
	{
		name: '小辣椒 z',
		price: 0011
	}
]


// 裡面沒有東西 回傳給客戶端
// server.on('request' , function(){
// 	console.log("收到客戶端的請求了")
// })

server.on('request', function(request, response){

	console.log('客戶端請求的路徑是 ' + request.url)
	console.log('客戶端的路徑+端口號是: ', request.socket.remoteAddress , request.socket.remotePort)

	// 如果沒有限制的話, 任何url 都會執行同樣的事情
	// response.write('hello : here is reponse by http node.js good!!')
	// response.write('haha')

	// 響應內容只能是二進制數據或者字串
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
	 else if(request.url == '/products')
	 {
	 	response.writeHead(200, { 'Content-Type': 'application/json' })
	 	response.end(JSON.stringify(products))
	 }
	 else if(request.url == '/html')
	 {
	 	response.setHeader('Content-Type', 'text/html; charset=utf-8')
	 	response.end(`<p>hello html</p>

	 		<p> <a href="">點我</a>  </p>

	 		`)
	 }
	 else
	 {
	 	// 響應內容只能是二進制數據或者字串
	 	// => 會當機 sever跳錯後 服務會關起來 囧
	 	// response.write(10)   
	 	response.setHeader('Content-Type', 'text/plain; charset=utf-8')
	 	response.write("trigger default page 默認頁面!!")
	 	response.end()
	 }



})




server.listen(3000, function(){

	console.log("服務器啟動成功了, 可以通過 http://127.0.0.1:3000/ 來進行訪問")

})

// 使用 ctrl + c 來取消listen
