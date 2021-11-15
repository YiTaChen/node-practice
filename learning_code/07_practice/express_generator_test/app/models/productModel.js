
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practice07db', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema

var productSchema = new Schema({

	id: {
		type: String,
		require: false,
		unique: true
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
	sellerId: {
		type: String,
		require: false
	},
	bidder: {
		type: String,
		require: false
	},
	bidderId: {
		type: String,
		require: false
	},
	winner: {
		type: String,
		require: false
	},
	winnerId: {
		type: String,
		require: false
	},
	status: {
		type: Number,
		// -1 管理員下架
		// -2 賣家下架
		// 0  尚未出價
		// 1  競價ing
		// 2  完成競價 
		// 3  買家直接購買 
		enum: [-1, 0, 1, 2, 3],
		default: 0
	},
	canBidder: {
		type: Boolean, 
		default: true
	},
	avatar: {
		type: String,
		default: '/public/images/avatar-default.png'
	},
	created_time: {
		type: Date
	},
	last_modify_time: {
		type: Date,
		default: Date.now
	},
	auction_end_time: {
		type: Date
	}


})


module.exports = mongoose.model('Product', productSchema)






