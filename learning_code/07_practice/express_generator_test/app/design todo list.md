

# design todo list 

## 出價頁面

### 前端
1. 標題 : '添加商品' => '競標'
		  'Let's sell it' => 'Let's bidder'
2. 商品資訊: 
	* 商品名稱, 描述, 底價, 直接購買價, 資料自動帶入 + disable
	* 新增 目前價格欄位(反灰)，出價欄位 送出 , 直接購買按鈕

3. 當出價價格 > 直接購買價 
   => 直接購買商品
   (option)
   提示"是否進行直接購買?"
   	  是: 直接購買
   	  否: 系統接受 "出價>直接購買價"  
   	  	a. disable 直接購買btn 
   	  	b. db 新增 canBuyoffFlag = false

4. 新增商品出價歷史紀錄 (option)


## main page

### 前端
1. 新增剩餘多少$$
2. add "your credit" at header

### 後端
1. 創建帳號時 default 給1000 credit

### db
1. userModel 新增剩餘金額 $$credit


## user info page

a. 待創建


## user bidder product list 使用者已出價列表

a. 待創建 => 看是否納入 user info page

## product bidder list (db) 商品競標出價歷史紀錄 


