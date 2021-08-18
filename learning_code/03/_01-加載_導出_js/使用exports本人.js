
// exports === module.exports

// node 第一句話 var exports = module.exports
//      最後一句話 return module.exports

// exports 為傳址(類似Array), 而非傳值
// 所以 重新賦值(定義) exports, 會導致 exports 斷開 = module.exports
exports = function(x,y){ return x+y }

// 最後回傳 return module.exports, 此時 exports 沒有關係

// ==> 所以想要引用本人, 要直接使用module.
module.exports = function (x,y) { return x-y }
