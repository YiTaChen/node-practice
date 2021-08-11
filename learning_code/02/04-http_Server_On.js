
var fs = require('fs')

var art_tmp = require('art-template')

var dataInfo = {
		title: '人員資料',
		name: 'adam',
		age: 20,
		country: 'Taipei',
		hobbies: [
			'寫code',
			'看動畫',
			'慢跑',
			'跳舞'
		]

	}

var http = require('http')

var server = http.createServer()

server.on('request', function(request, response){

	var url = request.url

	if(url == '/http')
	{
		console.log('已連線進來!! by ', request.url)
		fs.readFile('./05-http_basic_樣版.html', function(err,data){
			if(err)
			{
				console.log(err.toString())
			}
			else
			{
				response.setHeader('content-Type', 'text/html, charset = utf-8')
				//console.log(data.toString())
				response.end(art_tmp.render( data.toString(),dataInfo))
			}
		})
	}
	else
	{
		response.write('404 not found!!')
		response.end()
	}
})

server.listen(3000, function(){
	console.log('now server is running!! pls use port: 3000 ')
})