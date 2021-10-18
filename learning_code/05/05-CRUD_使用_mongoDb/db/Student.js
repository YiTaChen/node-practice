
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUD', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var studentSchema = new Schema({
	name : {
		type : String,
		required : true  // 表示"必需"填寫  
	},

	gender : {
		type : String,
		enum : ['0' ,'1' , '2'],
		default : '1'
	},

	age : {
		type : Number,
		required : false
	},

	hobies : String,

	date : {
		type : Date, default : Date.now,
	}
})

var Student = mongoose.model('Student', studentSchema) // '第一碼要大寫' 會轉成 users

module.exports = Student

// module.exports = mongoose.model('Student', studentSchema)
