
var fs = require('fs')
var router = require('./router')
var express = require('express')
var app = express()
app.engine('html',require('express-art-template'))

var bodyParser = require('body-parser')

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router)

app.listen(3000, function(){
	console.log('server is on, pls use port: 3000 ~')
})


