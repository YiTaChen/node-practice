
var User = require('./userModel.js')

// id relation

var getRandomSid = function(){
	const randonStr = Math.random().toString(36).substr(3);
	const now = new Date()
	const year = now.getFullYear()
	const month = now.getMonth()+1
	const randonSid = year.toString() + month.toString()+ randonStr
	console.log(randonSid)
	return randonSid
}

exports.getRandomSid = getRandomSid

exports.getNewProductSid = function(){
	const randonProductSid = 'p' + getRandomSid()
	console.log(randonProductSid)
	return randonProductSid
}

exports.getNewUserSid = function(){
	var randonUserSid = 'u' + getRandomSid()
	console.log(randonUserSid)
	return randonUserSid
}


// user relation

const getVisitorId = () => {
	return '-1'
} 

const isVisitorById = (userId) => {
	if(userId === '-1'){
		return true
	}
	else{
		return false
	}
}

const getVisitorName = () => { return '匿名' }

exports.getVisitorId = getVisitorId

exports.isVisitorById = isVisitorById

exports.getVisitorName = getVisitorName

exports.getUserNameByReq = function(req){

	if (req.session.user){
		return req.session.user.nickName
	}else{
		return '匿名競標者'
	}

}

exports.getUserIdByReq = function(req){

	if (req.session.user){
		return req.session.user.userId
	}else{
		return getVisitorId()
	}

}


var isNormalUser =  function(user){
	if (user){
		return true
	}else{
		return false
	}	
}

exports.isNormalUser = isNormalUser

exports.isNormalUserByReq = function(req){
	return isNormalUser(req.session.user)
}

exports.upDateReqUser = async (req) => {
	if(isNormalUser(req.session.user))
	{
		req.session.user = await User.findOne({ userId : req.session.user.userId }).exec()
		console.log(req.session.user.credit)
		return
	}
	else{
		return
	}
}


// credit relation

var addCredit = function(user, credit){
	if(isNormalUser(user)){
		user.credit = parseInt(user.credit) + parseInt(credit)
		return
	}
	else{
		return
	}
}

exports.addCredit = addCredit

exports.reduceCredit = function(user, credit){
	const offsetCredit = 0 - credit
	return addCredit(user, offsetCredit)
}



exports.getDateNow = function(){
	return new Date( Date.now() )
}


exports.pObjIsNull = function(obj){
	return new Promise((resolve, reject) => {
		if(obj){return resolve(false)}
		else{return resolve(true)}
		return reject(null)
	})
}

