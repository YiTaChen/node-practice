
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var userSchema = new Schema({

	email: {
		type: String,
		required : true
	},
	password: {
		type: String,
		required : true
	},
	create_time: {
		type: Date,
		default: Date.now
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: '/public/img/avatar-default.png'
	},
	nickname:{
		type: String,
		default: ''
	},
	enable: {
		type: Number,
		// -1 : disable
		// 0  : normal user
 		enum: [-1,0,1,2],
		default: 0
	}



})


module.exports = mongoose.model('User', userSchema)

