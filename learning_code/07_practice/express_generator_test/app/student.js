

var fs = require('fs')
var path = require('path')

var dbPath = path.join(__dirname, './db.json')

exports.find = function(callbackFn){
	fs.readFile(dbPath, 'utf8', function(err,data){
		if(err){ 
			console.log(err)
			return callbackFn(err) }
		callbackFn(null, JSON.parse( data ).students )
	})
}

exports.save = function( inputData ,callbackFn){
	fs.writeFile(dbPath, inputData, function(err){
		if(err){ return callbackFn(err) }
		return callbackFn(null)
	})
}

