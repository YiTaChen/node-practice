
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practice07db', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var productSchema = new Schema({

	id: {
		type: String,
		require: true
	},
	sid: {
		type: String,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	oriPrice: {
		type: String,
		require: true
	},
	price: {
		type: String,
		require: false
	},
	buyOffPrice: {
		type: String,
		require: false
	},
	description: {
		type: String,
		require: false
	},
	seller: {
		type: String,
		require: false
	},
	bidder: {
		type: String,
		require: false
	},
	winner: {
		type: String,
		require: false
	},
	status: {
		type: Number,
		// 0  尚未出價
		// -1 管理員下架
		// -2 賣家下架
		// 1  競價ing
		// 2  完成競價 
		enum: [-1, 0, 1, 2],
		defualt: 0
	},
	avatar: {
		type: String,
		defualt: '/public/images/avatar-default.png'
	},
	created_time: {
		type: Date,
		defualt: Date.now
	},
	last_bidding_time: {
		type: Date,
		defualt: Date.now
	},
	auction_end_time: {
		type: Date,
		defualt: Date.now
	}


})


module.exports = mongoose.model('Product', productSchema)






