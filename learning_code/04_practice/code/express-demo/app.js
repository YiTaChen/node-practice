
var express = require('express')

var app = express()


app.use('/public/', express.static('./public/'))

app.get('/', function(req, res){

	// res.write('hello ')
	// res.write('world ')
	// res.end()
	// 同等下面這行..
	// res.end('hello world')

	// 使用express 時, 
	// 推薦直接使用send (會包含一些constent type)
	res.send('hello world')
})

app.get('/login', function(req, res){
	res.send('you use login page')
})





app.listen(3000, function(){
	console.log('express app is running...')
})
