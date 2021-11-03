var express = require('express');
var User = require('../models/userModel.js')
var Product = require('../models/productModel.js')
var md5 = require('blueimp-md5')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res){
  res.render('add_product.html')
})

router.post('/add', function(req, res, next){

  var body = req.body

  body.oriPrice = body.price
  
  new Product(body).save(function(err, user){
    if(err){
      return next(err)
    }

    res.status(200).json({
      err_code: 0,
      message: 'OK'
    })
  })
})



router.post('/signin', function(req, res, next){

  var body = req.body

  User.findOne({
    email: body.email,
    password: md5(md5(body.password))
  }, function(err, user){
    if(err){
      return next(err)
    }
    if(!user){
      return res.status(200).json({
        err_code:1,
        message: 'Email or password is invalid.'
      })
    }

    req.session.user = user

    res.status(200).json({
      err_code: 0,
      message: 'OK'
    })

  })
})

router.get('/sign_up', function(req, res, next){
  res.render('signUp.html')
})



router.get('/logout' , function(req, res){

  req.session.user = null

  res.redirect('/')

})

module.exports = router;
