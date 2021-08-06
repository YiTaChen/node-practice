


var fs = require('fs')


// 文件寫入 
// 文件寫入成功 => error : null
// 文件寫入失敗 => error : 錯誤對象



fs.writeFile('./data/node_write.md', '哈囉, 我是新寫入的', function(error){

console.log("文件寫入成功!! Good~~!")

})

