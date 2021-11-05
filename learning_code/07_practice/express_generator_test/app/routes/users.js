var express = require('express');
var User = require('../models/userModel.js')
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
    email: body.email,
    password: md5(md5(body.password))
  }, function(err, user){
    if(err){
      return next(err)
    }
    if(!user){
      return res.status(200).json({
        err_code:1002,
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


router.post('/sign_up', function(req, res, next){

  var body = req.body
  // console.log(body)
  // console.log('finish step 1')
  User.findOne({
    $or: [{
      email: body.email
    }
    ,{
      nickName: body.nickName
    }
    ]
  }, function( err, data){
    if(err){
      console.log(err)
      return next(err)
    }
    // console.log('finish step 2')

    if(data){
      console.log(data)
      return res.status(200).json({
        err_code: 1001,
        message: 'Email or nickname already exists!!'
      })
      return res.send('email already exists, pls use another.')
    }

    body.password = md5(md5(body.password))

    new User(body).save(function(err, user){
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
