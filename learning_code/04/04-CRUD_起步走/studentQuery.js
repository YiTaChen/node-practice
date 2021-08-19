

// need 實作的 function

//  1. get all students data
//  2. get one student data by id
//  3. update one student data by id
//  4. add one student data
//  5. delete one student data 

var fs = require('fs')
var dbPath = './views/db.json'

exports.getAll = function(callback){
	fs.readFile(dbPath, "utf8", function(err,data){
		if(err){
			return callback(err, null)
		}else{
			return callback(null, JSON.parse(data).students ) 
		}		
	})
}

// 暫時嘗試不出 return 指定id 的做法, 改用find
// var getByIdData = function(id, dataArray ){
// 	for(i = 0 ; i < dataArray.count-1 ; i++){
// 		if ( id === dataArray[i].id ){
// 			console.log('func: ', dataArray[i].id)
// 			return dataArray[i]
// 		} 
// 	}
// }

exports.getById = function( id , callback){
	fs.readFile(dbPath, "utf8", 
		function(err,data)
		{
		if(err)
		{
			return callback(err, null)
		}
		else
		{
			var students = JSON.parse(data).students
			var stdInfo = students.find(
				function(item){ return item.id === id })
			//console.log(stdInfo)
 			return callback(null, stdInfo ) //JSON.parse(studentInfo)  
		}		
	})
}

exports.updateOneStd = function( stdInput , callback){
	fs.readFile(dbPath, "utf8", 
		function(err,data)
		{
		if(err)
		{
			return callback(err, null)
		}
		else
		{
			stdInput.id = parseInt(stdInput.id)
			var students = JSON.parse(data).students
			var stdInfo = students.find(
				function(item){ return item.id === stdInput.id })

			for(var key in stdInfo){
			//	console.log(stdInfo.id)   // 正常可以用 .屬性 得到value
			//	console.log(key)          // 單 print key 可以看得到
			//	console.log(stdInfo.key)  // 但 undefined 取不到值 
			//  console.log(stdInfo[key]) // 需要 obj[key] 來讀寫值
			stdInfo[key] = stdInput[key]
			}

			// console.log(students)      
			// 這應該是傳址, 資料連結依然綁在 students 上
 			// 所以直接把整個 students 覆寫回文件即可
 			newStdData = JSON.stringify({ students : students })
 			
 			fs.writeFile(dbPath, newStdData, function(err){
 				if(err){ return callback(err) }
 					else{ return callback(null) }
 			})
		}		
	})
}


exports.addData = function( stdNew , callback){
	fs.readFile(dbPath, "utf8", 
		function(err,data)
		{
		if(err)
		{
			return callback(err)
		}
		else
		{
			var students = JSON.parse(data).students
			var newID = 0
 			var stdInfo = students.find(
				function(item){ 
					if(newID <= item.id ){ newID = item.id +1 }
					return item.id === -1 
				})
 			
 			stdNew.id = newID
 			
 			students.push(stdNew)
 			console.log(students)
 			newStdData = JSON.stringify({ students : students })

 			fs.writeFile(dbPath, newStdData, function(err){
 				if(err){ return callback(err) }
 					else{ return callback(null) }
 			})
		}		
	})
}


exports.deleteById = function( id , callback){
	fs.readFile(dbPath, "utf8", 
		function(err,data)
		{
		if(err)
		{
			return callback(err, null)
		}
		else
		{
			var students = JSON.parse(data).students
			var stdIndex = students.findIndex(
				function(item){ return item.id === id }
				)
			
			students.splice( stdIndex , 1 )

 			newStdData = JSON.stringify({ students : students })

 			fs.writeFile(dbPath, newStdData, function(err){
 				if(err){ return callback(err) }
 					else{ return callback(null) }
 			})
		}		
	})
}



