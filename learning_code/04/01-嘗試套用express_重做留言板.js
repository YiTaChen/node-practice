

var template = require('art-template')

var express = require('express')
var app = express()

app.engine('html',require('express-art-template'))

// option
// app.set('view options', {
// 	debug: process.env.NODE_ENV !== 'production'
// })

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


app.get('/',function(req, res){
	
	res.render('msg_main.html' ,{
		msgInfos : msgInfos
	})

	// res.statusCode = 302
	// res.setHeader('Location','/public/msg_main.html')
	// res.end()
})

app.get('/msg_add_request',function(req, res){
	var msgInfo = req.query
	msgInfo.date = '2021-09-18'
	msgInfos.unshift(msgInfo)
	//msgInfos.push(msgInfo)

	res.redirect('/')
	// res.statusCode = 302
	// res.setHeader('Location','/public/msg_main.html')                     
	// res.end()
})

app.get('/post', function(req, res){
	res.render('msg_add.html')
})

app.use('/public/', express.static('./public/'))

app.listen(3000, function(){
	console.log('server is on, pls use port: 3000 ')
})








