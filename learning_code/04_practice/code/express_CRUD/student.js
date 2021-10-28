

var fs = require('fs')

exports.find = function(callbackFn){
	fs.readFile('./db.json', 'utf8', function(err,data){
		if(err){ return callbackFn(err) }
		callbackFn(null, JSON.parse( data ).students )
	})
}

exports.save = function( inputData ,callbackFn){
	fs.writeFile('./db.json', inputData, function(err){
		if(err){ return callbackFn(err) }
		return callbackFn(null)
	})
}

