var gaozhengyu666 = {
  chunk: function(array, size) {
   var ary = []
   for(var i = 0; i < array.length ; i+=size) {
    ary.push(array.slice(i,size + i))
  }
  return ary
},
compact: function(array) {
  var ary = []
  var arraylegnth = array.length
  for (var i = 0; i <arraylegnth; i++){
    if(array[i]) {
      ary.push(array[i])
    }
  }
  return ary
},
difference: function(array,...theAgrs) {
  var newArr=[]
  var bigArr = [].concat(...theAgrs)
  for (var i=0; i < array.length; i++) {
    if (!bigArr.includes(array[i])) {
      newArr.push(array[i])
    }
  }
  return newArr
    
  
},





































}

