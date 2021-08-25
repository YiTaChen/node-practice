
var fs = require('fs')
var stdData = require('./db/Student.js') // 修改成mongoDB 

var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')


var animals = [ 'cat', 'dog', 'pig' ]

var stdTest = {  "name" : "echo", "gender" : 2, "age": 29, "hobies" : "dance" }

var add = function(x,y){ return null }

router.get('/', function(req,res){
	res.redirect('/students')	
})

router.get('/students', function(req, res){

	stdData.find().exec(
		function(err,data)
		{
			if(err)
			{
				return res.status(500).send('server readFile error!!')
			}
				res.render('main.html' , { 
				animals : animals,	
				students : data
			})
		}
	)
})

router.get('/students/new', function(req, res){
	res.render('new.html')
})

router.post('/students/new', function(req, res){

	var stdAdd = new stdData(req.body)

	stdAdd.save(function(writeErr){
		if(writeErr){ 
			console.log(writeErr)
			return res.status(500).send('server readFile error!!')
		}else{
			res.redirect('/')
		}
	} )
})

router.get('/students/edit', function(req, res){

	// 嘗試使用 req.query.id & req.query._id  
	// => 使用 req.query._id 會產生 undefined 
	// 而且 mongoose.Types.ObjectId( req.query._id ) 轉換的值會與原本不同
	// console.log( req.query )
	// console.log( 'req.query.id : ' , req.query.id)
	// console.log( 'req.query._id : ' , req.query._id)
	// console.log(mongoose.Types.ObjectId( "6125dae428bb0e2f6640f5d6" ))
	// try{ console.log( 'use  mongoose.Types.ObjectId( req.query.id ) ' ,　mongoose.Types.ObjectId( req.query.id )) }
	// catch(err){ 
	// 	//console.log(err)
	// 	console.log('error use  mongoose.Types.ObjectId( req.query.id) error') 
	// }

	// try{ console.log( 'use  mongoose.Types.ObjectId( req.query._id ) ' ,　mongoose.Types.ObjectId( req.query._id )) }
	// catch(err){ 
	// 	//console.log(err)
	// 	console.log('error use  mongoose.Types.ObjectId( req.query._id) error') 
	// }
	
	// console.log( 'req.query.id : ' , req.query.id)
	// console.log( 'req.query._id : ' , req.query._id)
	// stdData.find().exec(
	// 	function(err,data)
	// 	{
	// 		if(err)
	// 		{
	// 			return res.status(500).send('server readFile error!!')
	// 		}
	// 			console.log(data)
	// 		})

	// 可以查到資料
	// stdData.find({id: req.query.id}).exec(function(err,result){
	// 	if(err){console.log(err)}
	// 		else{console.log(result)}
	// })

 	// 不能查到資料
	// stdData.find({ _id: req.query._id}).exec(function(err,result){
	// 	if(err){console.log(err)}
	// 		else{console.log(result)}
	// // })

	stdData.findById( req.query.id.replace( /"/g , '')  , function(readErr, studentInfo){
		if(readErr){
			console.log(readErr)
			return res.status(500).send('server readFile error!!')
		}else{
			// console.log(studentInfo)
			res.render('edit.html' , {
				student : studentInfo
			})
		}
	})

	}
)


router.post('/students/edit', function(req, res){
	

	// 修改時，_id 沒法修改，最後把req.body._id 屬性移除，再拿進去更新
	var id =  req.body._id.replace( /"/g , '')
	// console.log( 'req.body : ' , req.body )
	// console.log( 'req.body._id : ' , req.body._id )
	// console.log( 'req.body.id : ' , req.body.id )
	// console.log( ' req.body._id.replace( /"/g , ) id : ' , id )
	

	delete req.body._id
	// console.log( 'req.body : ' , req.body )
	
	//req.body._id = mongoose.Types.ObjectId( req.query._id )
	// console.log(req.body)
	// console.log(mongoose.Types.ObjectId( req.query._id ))
	
	stdData.findByIdAndUpdate( id  , req.body  , function(writeErr){
		if(writeErr){ 
			console.log(writeErr)
			return res.status(500).send('server readFile error!!')
		}else{
			//console.log(req.body.id)
			console.log('write success')
			res.redirect('/')
		}
	} ) 
})

router.get('/students/delete', function(req, res){
	//console.log(req.query.id)
	var id =  req.query.id.replace( /"/g , '')
	stdData.findByIdAndRemove( id , function(sysErr){
		if(sysErr){
			return res.status(500).send('server readFile error!!')
		}else{
			res.redirect('/')
		}
	}  )
})


module.exports = router


