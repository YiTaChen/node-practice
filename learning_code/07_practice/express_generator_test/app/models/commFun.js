

exports.getNewSid = function(){
	var randonStr = Math.random().toString(36).substr(3);
	var now = new Date()
	var year = now.getFullYear()
	var month = now.getMonth()+1
	var randonSid = 'p' + year.toString() + month.toString()+ randonStr
	console.log(randonSid)
	return randonSid
}
