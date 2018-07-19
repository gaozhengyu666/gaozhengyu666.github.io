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
sum: function(array) {
  return array.reduce(function(pre,item){
    return pre + item
  })
},
reverse: function(array) {
  var newArr = []
  for (var i = array.length - 1; i >= 0 ;i--) {
    newArr.push(array[i])
  }
  return newArr
},
flatten: function (array) {
  var newArr = []
  for (var i = 0; i < array.length ;i++) {
    if(!Array.isArray(array[i])) {
      newArr.push(array[i])
    } else {
      for (var j = 0 ; j < array[i].length ; j++) {
        newArr.push(array[i][j])
      }
    }
  }
  return newArr
},
flattenDeep: function(ary){
  var result = []
  for (var i = 0 ; i < ary.length;i++) {
    if (Array.isArray(ary[i])) {
      var temp = gaozhengyu666.flattenDeep(ary[i]) 
      result = [...result,...temp]

    } else {
      result.push(ary[i])
    }
  }
  return result
},
flattenDepth: function (ary,depth) {
  if (depth === 0) {
    return ary
  }
   var result = []
  for (var i = 0 ; i < ary.length;i++) {
    if (Array.isArray(ary[i])) {
      var temp = gaozhengyu666.flattenDepth(ary[i],depth -1) 
      result = [...result,...temp]

    } else {
      result.push(ary[i])
    }
  }
  return result
},







































}

