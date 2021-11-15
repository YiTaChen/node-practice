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
  
  // 卡控
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
    
    // init pruduct info 
    body.oriPrice = body.price
    body.sid = commFun.getNewProductSid()
    
    if(!userData || !userData.nickName||userData.nickName.trim() == ''){
      body.bidder = '匿名'
      body.seller = commFun.getVisitorName
      body.sellerId = commFun.getVisitorId
    }
    else {
      body.bidder = userData.nickName
      body.seller = userData.nickName
      body.sellerId = userData.userId
    }
    // console.log(body)
    
    var productData = new Product(body)
    productData.created_time = productData.last_modify_time

    // console.log(productData)
    productData.save(function(err, user){
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
  
  // console.log('hooooo: ')
  // console.log(req.query.sid)
  
    Product.findOne( { sid : req.query.sid } ).exec( function(err,productData){
      if(err){console.log(err)}
      else{
        req.session.product = productData
        
        res.render('edit_product.html',{ product : productData, user: req.session.user })
      }
      // console.log(req.session.product)
      // console.log(req.session.product.name)
    })
    // res.render('edit_product.html')
  }
)

router.post('/bidder', function(req, res, next){

  // get product info by sid (req.session.product)
  // check form data
  // update productData info
  // then update db data

  Product.findOne( { sid : req.session.product.sid } ).exec( function(err,productData){
      // console.log(productData)
      if(err){console.log(err)}
      else{
        
        var body = req.body
        // console.log(body.price)
        if(!body.price || body.price.trim == '' ){
          res.status(200).json({
            err_code: 333,
            message: 'bidder price can not be empty.'
          })
        }
        // console.log(productData)

        productData.price = body.price
        productData.status = 1      
        productData.bidder = commFun.getUserNameByReq(req)
        productData.last_modify_time = commFun.getDateNow()

        
        // console.log('before update')

        Product.updateOne({sid : productData.sid}, productData , function(err){
          if(err){
            console.log(err)
            return next(err)
          }
          else{
            res.status(200).json({
              err_code: 0,
              message: 'OK'
            })
          }
        })
      }
      
    })
})




const proDataBuyOffUpdate = (proData, winnerNameStr, BuyOffPrice) => {
  proData.price = BuyOffPrice
  proData.status = 3     
  proData.winner = winnerNameStr
  proData.bidder = winnerNameStr
  proData.last_modify_time = commFun.getDateNow()
  proData.canBidder = false
  return
}

const creditTransBuyOff = async (userWinner, productOwnId, credit) => {
  // check winner and ownner is valid
  // if invalid => ignore the transfer 
  // credit transfer winner(-) & ownner(+)  
  try{
    const winnerId = commFun.isNormalUser(userWinner)? userWinner.userId : commFun.getVisitorId()
    
    if(commFun.isVisitorById(winnerId)){}
    else{
      const winUser = await User.findOne({ userId : winnerId }).exec()
      commFun.reduceCredit( winUser, credit ) 
      const uwRes = await User.updateOne({ userId : winnerId }, winUser )
      console.log(uwRes)
    }
    

    if(commFun.isVisitorById(productOwnId)){}
    else{
      const ownUser = await User.findOne({ userId : productOwnId }).exec()
      commFun.addCredit( ownUser, credit ) 
      const uoRes = await User.updateOne({ userId : productOwnId }, ownUser ) 
      console.log(uoRes)
    }
    
    return 
  }
  catch(err)
  {
    console.log(err)
    return (err)
  }
}

router.post('/buyOff', async function(req, res, next){

  // get product info by sid (req.session.product)
  // check form data
  // update productData info
  // then update db data

  try{

    const proData = await Product.findOne( { sid : req.session.product.sid } ).exec()

    proDataBuyOffUpdate(proData, commFun.getUserNameByReq(req), proData.buyOffPrice)

    await creditTransBuyOff(req.session.user, proData.sellerId, proData.buyOffPrice)

    const uRes = await Product.updateOne({sid : proData.sid}, proData )
    
    commFun.upDateReqUser(req)
    
    if(uRes){
      res.status(200).json({
        err_code: 0,
        message: 'OK'
      })
    }

  }catch(err){
    return next(err)
  }

  
})




module.exports = router;
