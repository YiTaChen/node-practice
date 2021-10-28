
var fs = require('fs')

var express = require('express')
var app = express()
app.engine('html',require('express-art-template'))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


var msgdata = [
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

app.use('/public/', express.static('./public'))
//app.use('/', express.static('./public'))


app.get('/', function(req,res){
	res.render('msg_main.html', { msgInfos: msgdata })
})

app.get('/msg_add', function(req,res){
	res.render('msg_add.html')
})

app.post('/msg_add', function(req,res){
	var comment = req.body
	
	comment.dateTime = '2021-11-01 12:10:01'
	msgdata.unshift(comment)
	//console.log(req.body)
	
	// res.send
	// res.redirect
	// 這些方法 Express 會自動結束響應
	res.redirect('/')
	// res.statusCode = 302
	// res.setHeader('Location','/')
})


app.listen(3000, function(){
	console.log('server: 3000 is on... ')	
})

