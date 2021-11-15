
aFile = require('./_01_data/a_3s')



// console.log('start a')
// aFile.a


// aFile.b()

// console.log('start promise_c')
// aFile.promise_c.then(data => {
// 		console.log('start then() in promise_c')
// 		} 
// 	)




aFile.pfunc_c().then(data => { 
 console.log(data)
 console.log('test')

 return 'abc'
}).then(data => {
	console.log(data)
})




