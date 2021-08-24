

# 基本操作

ref by: 
https://www.runoob.com/mongodb/mongodb-analyzing-queries.html

## 系統操作

### 進入mongodb
cmd => mongo

### 離開mongodb
exit

### 顯示所有db
**show dbs**
result ex:
Users
Test
Animals

### 切換至該db
**use `db`**
ex: 
use Animals

### 顯示db 使用的`db`之下的collections
	類似資料表的概念
**show collections** 
cats
dogs

## CRUD 增刪改查

### 查詢
**db.cats.find()**
db.cats.find().pretty()  // 格式化顯示結果

### 新增
**db.cats.inserOne( {新增內容} )**
ex:
db.cats.insertOne({"name" : "Kitty", "size" : "small" })

### 更新
**db.Cats.Update( {條件} , { $set: {更新內容} } )**
ex:
db.users.update( { "userName" : "adam" } , { $set:{ "age" : 18 } } )  )

### 刪除
**db.cats.remove( {條件} )**
ex:
db.cats.remove({"name" : "meow"})
