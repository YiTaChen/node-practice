
var express = require('express')
var bodyParser = require('body-parser')
var template = require('art-template')

var app = express()
app.engine('html',require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/public/', express.static('./public/'))

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

app.post('/post', function(req,res){
	var tempInfo = req.body
	tempInfo.date = '2021-08-19'
	msgInfos.unshift(tempInfo)
	//console.log(req.body)
	res.render('msg_main.html', { msgInfos : msgInfos })
})

app.get('/post', function(req,res){
	res.render('msg_add_03.html')
})

app.get('/', function(req,res){
	res.render('msg_main.html')
})

app.listen(3000, function(){
	console.log('server is on by port: 3000')
})






