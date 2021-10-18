

# Web 前後端架構

## 架構內容

- 設計一個電商網站

- 支援功能
1. 使用者登陸
	- 帳號創建
	- 帳號登陸
	- 記錄頭像與使用者資訊
	- 登陸狀態保存, 使用session

2. 商品內容

3. 購物車資訊
	- 使用cookies 紀錄資訊

4. 喜好商品 (option)

5. DB使用, 支援數據持久化

6. 網頁上線至雲端AWS or Azure
	- 嘗試只用自訂的網域名

7. router 路由設計 
	- 包含default 網頁路徑

8. 高併發應用 (option)

9. 網頁頂部與網頁底部, html版面繼承

## 前端

## 後端

### DB

## To Do List

### 基本建置 主頁&入口

1. 建置首頁樣板 from bootstrap

2. npm express mongoose ...

3. app.js (入口) 基本建置

4. 基本首頁 html : main.html

5. 拆分頁首、頁尾 至header.html, footer.html

6. 把main.html 固定內容 移動至 \_layouts 
   並使用母版繼承的方法 改寫成home.html

### Router

|  路徑  |  方法  |  get參數  |  post參數  |  是否需要登陸  |  備註  |
| 	 /		| GET   | 				|				|					| 渲染首頁 |
| /register | GET   | 				|				|					| 渲染首頁 |　			
| /register | POST   | email, nickname, password |				|					| 渲染首頁 |　
| /login | GET   | 				|				|					| 渲染首頁 |　
| /login | POST   | 	email, password			|				|					| 渲染首頁 |　
| /logout | GET   | 				|				|					| 渲染首頁 |　






