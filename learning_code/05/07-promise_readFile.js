
var fs = require('fs')

function pReadFile(filePath){
	return new Promise( function(resolve, reject){
		fs.readFile(filePath, 'utf8' , function(err,data){
			if(err){
				reject(err)
			}else{
				resolve(data)
			}
			})
    })
}


pReadFile('./_06_resource/a.txt')
	.then(function(data){
		console.log(data)
		return pReadFile('./_06_resource/b.txt')
	})
	.then(function(data){
		console.log(data)
		return pReadFile('./_06_resource/c.txt')
	})
	.then(function(data){
		console.log(data)
	})
	.catch(function(err){
		console.log(err)
	})

