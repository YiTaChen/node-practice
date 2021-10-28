


# 安裝：
```javascript=
npm install --save art-template
npm install --save express-art-template
```

# 配置:
```javascript=
// 此處的'art' 表示檔案的後墜名
// 表示需要被art-template 給渲染的版面檔案
// 當然也可以改成 'html'
app.engine('art',require('express-art-template'))
```

# 使用:
```javascript= 
app.get('/',function(res,res){
	// express 默認會去項目中的 views 目錄找 index.html
		res.render('index.html', {
			title: 'hello world'
			})
	})
```

如果希望修改 views 視圖渲染儲存目錄, 可以:
```javascript= 
app.set('views', 目錄路徑)
```


# req.query

Express 內置, 可以直接通過req.query 來獲取表單數據

當使用get 方式傳送標單數據時
資料會鑲嵌在網址路徑上

雖然在express中, 可以使用req.query 來取得表單Action: "get"數據
but 不支援"post"... 
因此需要使用第三方包(官網中描述的middleware: body-parser)

# Body-parser

在 Express 中沒有內置獲取表單POST 請求體的API 這裡需要使用第三方包

## 安裝: 
```javascript= 
npm install --save body-parser 
```

## 配置:
```javascript= 
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置body-parser
// 只要加入這個配置, 則在req 請求對象上會多出來一個屬性:body
// 也就表示可以直接通過 req.body 來獲取表單POST 請求數據了
// parse application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse
app.use(bodyParser.json())

app.use(function(req,res){
	res.setHeader('Content-Type', 'text/plain')
	res.write('you posted:\n')
	res.end(JSON.stringify(req.body, null, 2))
	})
```







