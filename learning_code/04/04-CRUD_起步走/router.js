
var fs = require('fs')
var stdData = require('./studentQuery')

var express = require('express')
var router = express.Router()

module.exports = router

var animals = [ 'cat', 'dog', 'pig' ]

var stdTest = {  "name" : "echo", "gender" : 2, "age": 29, "hobies" : "dance" }
		

// var testFunc = function(err,data){
// 		if(err){
// 			return res.status(500).send('server readFile error!!')
// 		}
// 		res.render('main.html' , { 
// 		animals : animals,	
// 		students : studends
// 		})
// 	}

// var readData = function(err,data){
// 		console.log(data.toString())
// 		return data.toString()
// 	}

var add = function(x,y){ return null }

router.get('/', function(req,res){
	
	// console.log(stdData.getAll(readData)) // 因為異步執行 所以這時候會是undefided
	
	stdData.getAll(
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


router.get('/students', function(req, res){
	stdData.getAll(
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

	// 1. 取得表單資料
	// 2. get db.jsnon data     pass 直接加進去
	// 3. add data to db
	// 4. redirect to index

	// console.log(req.body)   // 1. done

	stdData.addData(req.body , function(writeErr){
		if(writeErr){ 
			return res.status(500).send('server readFile error!!')
		}else{
			res.redirect('/')
		}
	} )
})

router.get('/students/edit', function(req, res){
	// 1. 取得點選的 id 
	// 2. 取得student data by id
	// 3. 前往編輯頁面
	// 4. render 頁面 by student data
	// issue: gender 讀取尚未實作 => 直接 check: 女

	stdData.getById( parseInt(req.query.id) , function(readErr, studentInfo){
		if(readErr){
			return res.status(500).send('server readFile error!!')
		}else{
			res.render('edit.html' , { 	
				student : studentInfo
			})
		}
	})
})

router.post('/students/edit', function(req, res){
	stdData.updateOneStd(req.body , function(writeErr){
		if(writeErr){ 
			return res.status(500).send('server readFile error!!')
		}else{
			res.redirect('/')
		}
	} )
})

router.get('/students/delete', function(req, res){
	//console.log(req.query.id)
	stdData.deleteById( parseInt(req.query.id) , function(sysErr){
		if(sysErr){
			return res.status(500).send('server readFile error!!')
		}else{
			res.redirect('/')
		}
	}  )
})


