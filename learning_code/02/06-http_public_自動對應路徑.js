

var fs = require('fs')



var http = require('http')

var server = http.createServer()

server.on('request', function(request, response){

	var url = request.url
	//console.log(url.indexOf('/public').toString())
	if(url.indexOf('/public') === 0)
	{
		console.log('已連線進來!! by ', request.url)
		fs.readFile('.' + url , function(err,data){
			if(err)
			{
				console.log(err.toString())
				response.end('找不到檔案!!')
			}
			else
			{
				response.setHeader('content-Type', 'text/html, charset = utf-8')
				//console.log(data.toString())
				response.end(data)
			}
		})
	}
	else
	{
		console.log('已連線進來!! by ', request.url)
		fs.readFile('./view/home_page.html' , function(err,data){
			if(err)
			{
				console.log(err.toString())
				response.end('找不到檔案!!')
			}
			else
			{
				response.setHeader('Content-Type', 'text/html, charset = utf-8')
				//console.log(data.toString())
				response.end(data.toString())
			}
		})
	}
})

server.listen(3000, function(){
	console.log('now server is running!! pls use port: 3000 ')
})