
var fs = require('fs')

var http = require('http')

var server = http.createServer()

server.on('request', function(req, res){

	var url = req.url

	if (url === '/') {
		fs.readFile('./11-http_resource/index.html', function(err, data){
			if (err) {
				res.setHeader('Content-Type', 'text/plain; charset=utf-8')
				res.end('文件讀取失敗, 請稍後重試!! ')
			}
			else
			{
				res.setHeader('Content-Type', 'text/html; charset=utf-8')
				res.end(data)
			}
		})
	}else if (url === '/jpg') {
		fs.readFile('./11-http_resource/abc.jpg', function(err, data){
			if (err) {
				res.setHeader('Content-Type', 'text/plain; charset=utf-8')
				res.end('文件讀取失敗, 請稍後重試!! ')
			}
			else
			{
				res.setHeader('Content-Type', 'image/jpeg')
				res.end(data)
			}
		})
	}
})

server.listen(3000, function(){
	console.log('伺服器已啟動, 請使用port: 3000 ')
})


