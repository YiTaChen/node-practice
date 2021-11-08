
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practice07db', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var userSchema = new Schema({

	email: {
		type: String,
		require: false
	},
	password: {
		type: String,
		require: true
	},
	nickName: {
		type: String,
		require: false
	},
	gender: {
		type: Number,
		enum: [-1, 0, 1, 2],
		default: -1
	},
	status: {
		type: Number,
		// 0  沒有權限
		// -1 刪除權限
		// 1  普通權限
		// 2  高階權限
		enum: [-1, 0, 1, 2],
		default: 0
	},
	avatar: {
		type: String,
		default: '/public/images/avatar-default.png'
	},
	created_time: {
		type: Date
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	}


})


module.exports = mongoose.model('User', userSchema)






