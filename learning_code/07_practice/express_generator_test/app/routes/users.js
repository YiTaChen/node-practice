var express = require('express');
var User = require('../models/userModel.js')
var commFun = require('../models/commFun.js')
var md5 = require('blueimp-md5')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res){
  res.render('login.html')
})

router.post('/login', function(req, res, next){

  var body = req.body

  User.findOne({
    nickName: body.nickName,
    password: md5(md5(body.password))
  }, function(err, user){
    if(err){
      return next(err)
    }
    if(!user){
      return res.status(200).json({
        err_code:1002,
        message: 'nick name or password is invalid.'
      })
    }
    console.log(user)
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


router.post('/sign_up', function(req, res, next){

  var body = req.body
  // console.log(body)
  // console.log('finish step 1')
  User.findOne({
    nickName: body.nickName
    // $or: [{
    //   email: body.email
    // }
    // ,{
    //   nickName: body.nickName
    // }
    // ]
  }, function( err, data){
    
    // catch err
    if(err){
      console.log(err)
      return next(err)
    }

    // check data
    if(data){
      console.log(data)
      return res.status(200).json({
        err_code: 1001,
        message: 'nickname already exists!!'
      })
      return res.send('nick name already exists, pls use another.')
    }

    // encode password
    body.password = md5(md5(body.password))
  
    // init userData    
    var userData = new User(body)

    userData.created_time = userData.last_modified_time
    userData.credit = 1000
    userData.userId = commFun.getNewUserSid()

    // save func
    userData.save(function(err, user){
      if(err){
        return next(err)
      }
      // console.log('finish step 3')
      req.session.user = user

      res.status(200).json({
        err_code: 0,
        message: 'OK'
      })
      // console.log('finish step 4')
      // 服務端重定向 只對於同步請求才有效, 異步請求無效
      // res.redirect('/')

    })
  })
})

router.get('/logout' , function(req, res){
  req.session.user = null
  res.redirect('/')
})

module.exports = router;
