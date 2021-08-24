
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

// const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });


var userSchema = new Schema({
	userName : {
		type : String,
		required : true  // 表示"必需"填寫  
	},

	password : {
		type : String,
		required : true
	},

	remark : String,

	date : {
		type : Date, default : Date.now,
	}
})

var User = mongoose.model('User', userSchema) // '第一碼要大寫' 會轉成 users

var person = new User({
	userName : 'adam',
	password : '123456',
	remark : 'hello world!!'
})

person.save(function(err,result){
	if(err){
		console.log('保存失敗!!')
	}else{
		console.log('保存成功~')
		console.log(result)
	}
})


