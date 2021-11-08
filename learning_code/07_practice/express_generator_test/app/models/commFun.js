

exports.getNewSid = function(){
	var randonStr = Math.random().toString(36).substr(3);
	var now = new Date()
	var year = now.getFullYear()
	var month = now.getMonth()+1
	var randonSid = 'p' + year.toString() + month.toString()+ randonStr
	console.log(randonSid)
	return randonSid
}


exports.getUserNameByReq = function(req){

	if (req.session.user){
		return req.session.user.nickName
	}else{
		return '匿名競標者'
	}

}

exports.getDateNow = function(){
	return new Date( Date.now() )
}
