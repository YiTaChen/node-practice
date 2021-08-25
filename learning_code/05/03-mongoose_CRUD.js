
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbPractice', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var userSchema = new Schema({
	userName : {
		type : String,
		required : true  // 表示"必需"填寫  
	},

	password : {
		type : String,
		required : true
	},

	age : {
		type : Number,
		required : false
	},

	remark : String,

	date : {
		type : Date, default : Date.now,
	}
})

var User = mongoose.model('User', userSchema) // '第一碼要大寫' 會轉成 users

var person = new User({
	userName : 'echo',
	password : '13570',
	remark : 'hello world!!',
	age: 18
})


// // 增加
// person.save(function(err,result){
// 	if(err){
// 		console.log('保存失敗!!')
// 	}else{
// 		console.log('保存成功~')
// 		console.log(result)
// 	}
// })


// 查詢
// gt > (大於) , lt < (小於)
// User.find( {age : 18} ).where('age').gt(10).exec(function(err,result){
// 	if(err){ console.log('查詢失敗') }
// 	else{ console.log(result) }
// })

// var printId = function(item){ for(i = 0 ; i < item.length ; i++){
//  console.log(item[i]._id)  }}

// User.find( {age : 18} ).where('age').gt(10).exec(function(err,result){
// 	if(err){ console.log('查詢失敗') }
// 	else{ printId(result) }
// 	}
// )

User.find().exec(function(err,result){
	if(err){console.log(err)}
		else{console.log(result)}
})



// 這裡
// var findAll = User.find().exec(function(err,result){
// 	if(err){ console.log('查詢失敗') }
// 	else{ console.log(result) }
// })


// 刪除
// User.deleteOne( {userName : "123" } , function(err){
// 	if(err) {console.log(err)}
// 	else{}	
// })

// findAll


// // 修改 update
// User.updateOne( {userName : "adam" } , { age : 26 } , function(err, result){
// 	if(err){console.log(err)}
// 		else{
// 			User.find().exec(function(err2,result){
// 				if(err2){ console.log('查詢失敗') }
// 				else{ console.log(result) }
// 			})	
// 		}
// } )





