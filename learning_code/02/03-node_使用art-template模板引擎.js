
var fs = require('fs')

var template =  require('art-template') 

var data = 'Hi {{ name }} !!'

var result = template.render(data, {

	name: 'Jacks Pirrot'

})

console.log(result)


var dataInfo = {
		title: '人員資料',
		name: 'adam',
		age: 20,
		country: 'Taipei',
		hobbies: [
			'寫code',
			'看動畫',
			'慢跑',
			'跳舞'
		]

	}

fs.readFile('./05-http_basic_樣版.html', function(err,data){
	if(err){console.log('has error msg: ', err.toString())}
	else{
		console.log(template.render(data.toString(),dataInfo))
	}
})



