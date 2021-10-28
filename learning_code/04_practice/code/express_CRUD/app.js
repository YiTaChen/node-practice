
var fs = require('fs')

var express = require('express')
var app = express()

var bodyParser = require('body-parser')

var router = require('./router.js')

app.engine('html',require('express-art-template'))

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

// use body-parser extends 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// var Student = require('./student')

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

// var xfind = function(callbackFn){
// 	fs.readFile('./db.json', 'utf8', function(err,data){
// 		if(err){ return callbackFn(err) }
// 		return callbackFn(null, JSON.parse( data ).students )
// 	})
// }

// app.get('/', function(req,res){
// 	res.render('msg_main.html', { msgInfos: msgdata })
// })

// app.get('/', function(req,res){

// 	// var edata = null 

// 	// fs.readFile('./db.json', 'utf8', function(err,data){
// 	// 	if(err){ return res.status(500).send('server error') }
// 	// 	console.log(data)
// 	// 	edata = JSON.parse( data ).students
// 	// 	res.render('main.html', { students : edata })
// 	// })

// 	// xfind(function(err, jsonData){
// 	// 	if(err){ return res.status(500).send('server error') }
// 	// 	res.render('main.html', { students : jsonData })
// 	// console.log('done')
// 	// })
// 	// res.render('main.html')

// 	Student.find(function(err, jsonData){
// 		if(err){ return res.status(500).send('server error') }
// 		res.render('main.html', { students : jsonData })
// 	console.log('done1')
// 	})
// })


app.use(router)


app.listen(3000, function(){
	console.log('server: 3000 is now on...')
})