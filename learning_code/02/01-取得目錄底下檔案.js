
var fs = require('fs')

var path = './02-目錄_resource'

fs.readdir(path, function(err, data){

	if (err) {
		console.log('找不到目錄: ', )
	}
	else
	{
		console.log(data)
	}
})


