

var foo = 'bbb'

// exports 的成員與變數是不同的 且區隔開來的 (就算名稱相同)
exports.foo = 'hello world'

exports.add = function(x, y){ return x + y }


// 同理 同樣的function 名稱 
// exports 成員與定義的function 是不同的

function add(x, y ) {
	return x -y
}

exports.age = 18

var name = 'Tom'

// exports 成員直接等於內部資料
exports.name = name


exports.numArray = [1,2,3,4]

exports.strArray = ['a','b','c']

