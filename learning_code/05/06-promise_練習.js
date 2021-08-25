
var fs = require('fs')

// => 1 2 4 3 data

// console.log(1)
// new Promise( function(){

// 	console.log(2)

// 	fs.readFile('./_06_resource/a.txt', 'utf8' , function(err,data){

// 		if(err){
// 			console.log(err)
// 		}else{
// 			console.log(3)
// 			console.log(data)
// 		}
// 	})
// } )

// console.log(4)


var p1 = new Promise( function(resolve, reject){
	fs.readFile('./_06_resource/a.txt', 'utf8' , function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
} )

// var p2 = new Promise( function(resolve, reject){
// 	fs.readFile('./_06_resource/as111.txt', 'utf8' , function(err,data){
// 		if(err){
// 			reject(err)
// 		}else{
// 			resolve(data)
// 		}
// 	})
// } )

var p3 = new Promise( function(resolve, reject){
	fs.readFile('./_06_resource/b.txt', 'utf8' , function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
} )

var p4 = new Promise( function(resolve, reject){
	fs.readFile('./_06_resource/c.txt', 'utf8' , function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
} )


// => 1 2 3
// console.log(1)

// p1.then(function(data){ console.log(data) })

// console.log(2)

// p2.then(function(data){ console.log(data) } 
// 		, function(err){ console.log(err) }
// 		)

// console.log(3)


// 串聯 promise 應用, 若有err 會跳至catch
// => 1 7 2 aaa 3 bbb 5 ccc
console.log(1)

p1.then(function(data){
	console.log(2)
	console.log(data)
	return p3
}).then(function(data){
	//throw('err here')
	console.log(3)
	console.log(data)
	return p4
}).then(function(data){
	
	console.log(5)
	console.log(data)
}).catch( function(err){
	console.log(6)
	console.log(err)
})

console.log(7)



