
var express = require('express')
var router = express.Router()

var md5 = require('blueimp-md5')

var user = require('./models/user.js')

router.get('/',function(req,res){
	res.render('main.html')
})


router.get('/login',function(req,res){
	res.render('login.html')
})

router.post('/login',function(req,res){

})


router.get('/signUp',function(req,res){
	res.render('signUp.html')
})


var userFindAll = function(body){
	return new Promise((resolve, reject) => {
		user.find({email : body.email}).exec(function(err,result)
		{
			if(err){reject(err)}
			resolve(result)
		})
	})
}

var userDataSave = function(body){
	return new Promise((resolve, reject) => {
		user(body).save(function(err,result){
		if(err){ reject(err) }
		else{ resolve(true) }
		})
	})
}


router.post('/signUp', async function(req,res){
	// 1. 獲取表單數據
	// 2. 操作數據庫
	//	  - 判斷用戶是否存在
	//	  - 如果已存在，不允許註冊，顯示提示
	//    - 如果不存在，註冊新建用戶
	// 3. 發送響應

	var body = req.body

	// 牽套式寫法：
	// 看db 有無相同email
	// user.find( { email : body.email } , function(err, data){
	// 	if(err)
	// 	{
	// 		return res.status(500).json(
	// 				{
	// 					err_code : 2001,
	// 					msg : 'server err!!'
	// 				}
	// 			)
	// 	}
	// 	// console.log(data)
	// 	if(data.length>0){
	// 		// console.log(data)
	// 		return res.status(200).json(
	// 				{
	// 					err_code : 1001,
	// 					msg : 'account exist !!'
	// 				}
	// 			)
	// 	}

	// 	// console.log('find no email with', body.email)
		
	// 	req.body.password = md5(md5(req.body.password))
	// 	user(req.body).save(function(err,result){
	// 		if(err){
	// 			return res.status(500).json({
	// 				err_code : 3001,
	// 				msg : 'data save err!!'
	// 			})
	// 		}
	// 		else{
	// 			console.log('save success!!')
	// 			return res.status(200).json({
	// 				err_code : 0,
	// 				msg : 'save success!!'
	// 			})
	// 		}
	// 	})
	// } )

	// try catch, + async await 寫法 
	// compiler有問題 之後再解 => 9/3.21解完!!  
	// => 問題點在 try catch async await 一掛 
	// => 與 .then() .catch() 用法混淆了
 	try
	{
		var searchUserResult = await userFindAll(body)
		console.log(searchUserResult)

		if(searchUserResult.length>1){
			console.log('has account')
			return res.status(200).json(
					{
						err_code : 1001,
						msg : 'account exist !!'
					}
				)
		}

		body.password = md5(md5(body.password))	

		if(await userDataSave(body)){
			console.log('save success!!')
		}
		
		return res.status(200).json({
			err_code : 0,
			msg : 'save success!!'
		})

	}
	catch(err)
	{
		console.log('err happened')
		console.log(err)
		res.status(500).json(
		{
			err_code : 500,
			msg : err.message
		})
		return
	}



})


router.get('/logout',function(req,res){
	
})




module.exports = router


