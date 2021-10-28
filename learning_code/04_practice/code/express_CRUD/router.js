

var fs = require('fs')

var express = require('express')
var router = express.Router()

var Student = require('./student')

var bodyParser = require('body-parser')


router.get('/', function(req,res){	
	Student.find(function(err, jsonData){
		if(err){ return res.status(500).send('server error') }
		res.render('main.html', { students : jsonData })
	})
})

router.get('/add_student', function(req,res){
	res.render('add_std.html')
})

router.post('/add_student', function(req,res){
	var std_new = req.body
	
	Student.find(function(err, stdResult){
		if(err){ return res.status(500).send('server error') }
		std_new.id = stdResult[stdResult.length -1].id + 1
		stdResult.push(std_new)

		var stdNewData = JSON.stringify({ students : stdResult })

		Student.save(stdNewData ,function(err){
			if(err){ return res.status(500).send('server error') }
			console.log('save complete')
			res.redirect('/')
		})
	})

	

})

// router.get('/', function(req,res){

// })

// router.get('/', function(req,res){

// })






module.exports = router


