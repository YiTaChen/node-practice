

var express = require('express')
var app = express()

// 開放 ./public/ ex: a.js目錄底下的資料
// 並使用 /public/a.js 進行訪問
app.use('/public/',express.static('./public/'))

// 開放 ./public/ ex: a.js目錄底下的資料
// 並使用 '/a/' 進行替代 '/public/'
// 需使用 /a/a.js 進行訪問
app.use('/a/',express.static('./public/'))

// 開放 ./public/ ex: a.js目錄底下的資料
// 省略了 '/'
// 並可使用 /a.js 進行訪問
app.use(express.static('./public/'))

// 兩者同樣的話 會優先查找上面的, 找不到會再找下面的
app.use(express.static('./public2/'))


// 好處 1. 縮減大量的實體路徑 改成短短的url 
//      2. 並且把各種資料夾 一併引用到指定路徑
//         ex: /post/ , /main/person/ , /learn/ , /lecture/

app.listen(3000, function(){console.log('伺服器已啟動 port: 3000 ')})