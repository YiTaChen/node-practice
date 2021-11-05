var express = require('express');
var User = require('../models/userModel.js')
var Product = require('../models/productModel.js')
var commFun = require('../models/commFun.js')
var md5 = require('blueimp-md5')
var mongoose = require('mongoose')

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
  // console.log(body.price)
  if(!body.price || body.price.trim == '' ){
    res.status(200).json({
      err_code: 888,
      message: 'price can not be empty.'
    })
  }
  // console.log(body.name)
  if(!body.name || body.name.trim() == '' ){
    res.status(200).json({
      err_code: 999,
      message: 'name can not be empty.'
    })
  }
  else{
    var userData = req.session.user
    
    body.oriPrice = body.price
    body.sid = commFun.getNewSid()
    
    if(!userData || !userData.nickName||userData.nickName.trim() == ''){body.bidder = '匿名'}
    else {body.bidder = userData.nickName}

    new Product(body).save(function(err, user){
      if(err){
        return next(err)
      }

      res.status(200).json({
        err_code: 0,
        message: 'OK'
      })
    })
  }
})


router.get('/edit', function(req, res){
  
  console.log('hooooo: ')
  console.log(req.query.sid)
  
  Product.find( { sid : req.query.sid } ).exec( function(err,data){
    if(err){console.log(err)}
    else{console.log(data)}
  
  })
  res.render('edit_product.html')
}
)





module.exports = router;
