
exports.a = setTimeout(() => {
 console.log('這個訊息將在5秒後被印出來')
}, 5000)


exports.b = function(){
	console.log('start b()') 
	setTimeout(() => {
		console.log('這個訊息將在3秒後被印出來')
	}, 3000)
}


exports.promise_c = new Promise(function(resolve, reject){
	
	try{
		setTimeout(() => {
		 console.log('這個訊息將在6秒後被印出來 at promise_c')
		}, 6000)
		console.log('after time out')
		resolve('promise_c success') // success return data in resolve
	} catch(err) {
		reject('error occur at promise_c') // 
	}
})   

exports.pfunc_c = function(){ 
		return new Promise(function(resolve, reject){
		
		try{
			setTimeout(() => {
			 console.log('這個訊息將在6秒後被印出來 at pfunc_c')
			}, 6000)
			console.log('after time out pfunc_c')
			resolve('pfunc_c success') // success return data in resolve
		} catch(err) {
			reject('error occur at pfunc_c') // 
		}
	})   
}

exports.promise_d = new Promise(function(resolve, reject){
	
	try{
		setTimeout(() => {
		 console.log('這個訊息將在6秒後被印出來 at promise_d')
		}, 6000)
		console.log('after time out')
		resolve('promise_d success') // success return data in resolve
	} catch(err) {
		reject('error occur at promise_d') // 
	}
})   



