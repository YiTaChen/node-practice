

var fs = require('fs')

var http = require('http')
var server = http.createServer()

var url = require('url')

var template = require('art-template')

var msgInfos = [
{
	name : 'Tom',
	message : 'Hello World!!',
	date : '2021-08-17'
},
{
	name : 'adam',
	message : 'Hello World!! too~',
	date : '2021-08-18'
}
]

server.on('request', function(request, response){

	var resUrl = request.url

	// true 會把資料轉成物件 而非純文字
	var parseObj = url.parse(resUrl, true)

	//console.log(parseObj)

	// 取得url 開頭字串
	var pageUrl = parseObj.pathname
	// console.log(parseObj.pathname.toString())

	// // 取得query 並轉呈JSON 格式
	// console.log(JSON.stringify( parseObj.query))

	// console.log(resUrl)

	if(pageUrl === '/')
	{
		// 讓用戶重新導向
		response.statusCode = 302
		response.setHeader('Location','/public/msg_main.html')
		response.end()
	}
	else if(pageUrl.indexOf('/public') === 0 )
	{
		//console.log(resUrl)
		fs.readFile('.' + resUrl, function(err,data)
		{
			if(err){response.end('page not found~!!')}
			else
			{
				response.setHeader('Content-Type','text/html, charset= utf-8')
				var dataUpdate = ''
				if(pageUrl === '/public/msg_main.html')
				{
					dataUpdate = template.render(data.toString(),{
						msgInfos: msgInfos
					})
				}
				else
				{
					dataUpdate = data
				}

				response.end(dataUpdate)
			}
		})
	}
	else if(pageUrl === '/msg_add_request' )
	{
		var msgInfo = parseObj.query
		msgInfo.date = '2021-09-18'
		msgInfos.push(msgInfo)
		response.statusCode = 302
		response.setHeader('Location','/public/msg_main.html')                     
		response.end()
	}
	else
	{
		response.statusCode = 302
		response.setHeader('Location','/public/page_not_found.html')                      
		response.end()
	}

})




server.listen(3000, function(){

	console.log('伺服器已啟動 請使用port: 3000')

})







