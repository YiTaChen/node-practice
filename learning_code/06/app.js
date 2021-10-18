
var path = require('path')

var bodyParser = require('body-parser')

var express = require('express')

var app = express()

var router = require('./router.js')

app.use('/public/', express.static( path.join(__dirname ,'./public/')))
app.use('/node_modules/', express.static( path.join(__dirname ,'./node_modules/')))

// 預設會讀取views 目錄底下的資料 並以指定'html' 結尾的檔案
app.engine('html', require('express-art-template'))
// 多一道設定, 之後若是要改動views 可以從這裡改動
app.set('views' , path.join(__dirname, './views/'))

// 配置 body-parse
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// app.get('/', function(req, res){
// 	res.render('main.html')
// })

app.use(router)

// app.use(function(err, req, res, next) {

// 	return res.status(err.status || 500).send({
// 		err_code : 999,
// 		message: err.message,
// 		title: 'error'
// 	})

// })

app.listen(3000, function(){

	console.log('server started, pls use port : 3000 ~')

})