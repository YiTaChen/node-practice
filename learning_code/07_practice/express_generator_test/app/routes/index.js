
var fs = require('fs')
var Student = require('../student')
var User = require('../models/userModel.js')
var commFun = require('../models/commFun.js')
var Product = require('../models/productModel.js')
var bodyParser = require('body-parser')

var express = require('express');
//var User = require('../moduls/userModel.js')
var md5 = require('blueimp-md5')

var router = express.Router();

/* GET home page. */
// router.get('/',function(req, res){
//   res.render('main.html')
//   // res.render('main,html', {
//   //   user: req.session.user
//   // })
// })

// default
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', async function(req, res, next){  
  
  try{
     const productData = await Product.find().sort({'last_modify_time':-1}).exec()
     // commFun.upDateReqUser(req)  // here req can not callby ref
      
     req.session.user = commFun.isNormalUserByReq(req)? await User.findOne({ userId : req.session.user.userId }).exec() : req.session.user
     
     res.render('main.html', { products : productData, user: req.session.user })

  }catch(err)
  {
    return next(err)
  }

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



module.exports = router;
