var gaozhengyu666 = {
  chunk: function(array, size) {
    var ary = []
    for (var i = 0; i < array.length; i += size) {
      ary.push(array.slice(i, size + i))
    }
    return ary
  },
  compact: function(array) {
    var ary = []
    var arraylegnth = array.length
    for (var i = 0; i < arraylegnth; i++) {
      if (array[i]) {
        ary.push(array[i])
      }
    }
    return ary
  },
  difference: function(array, ...theAgrs) {
    var newArr = []
    var bigArr = [].concat(...theAgrs)
    for (var i = 0; i < array.length; i++) {
      if (!bigArr.includes(array[i])) {
        newArr.push(array[i])
      }
    }
    return newArr


  },
  sum: function(array) {
    return array.reduce(function(pre, item) {
      return pre + item
    })
  },
  reverse: function(array) {
    var newArr = []
    for (var i = array.length - 1; i >= 0; i--) {
      newArr.push(array[i])
    }
    return newArr
  },
  flatten: function(array) {
    var newArr = []
    for (var i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        newArr.push(array[i])
      } else {
        for (var j = 0; j < array[i].length; j++) {
          newArr.push(array[i][j])
        }
      }
    }
    return newArr
  },
  flattenDeep: function(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        var temp = gaozhengyu666.flattenDeep(ary[i])
        result = [...result, ...temp]

      } else {
        result.push(ary[i])
      }
    }
    return result
  },
  flattenDepth: function(ary, depth) {
    if (depth === 0) {
      return ary
    }
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        var temp = gaozhengyu666.flattenDepth(ary[i], depth - 1)
        result = [...result, ...temp]

      } else {
        result.push(ary[i])
      }
    }
    return result
  },
  drop: function (array, n = 1) {
    return array.slice(n)
  },
  dropRight:function (array, n = 1) {
    if (n >= array.length) {
      return []
    }
    array.splice(array.length - n)
    return array
  },

  fill: function (array, value, start= 0, end){
    end = end || array.length
    for (var i = start ; i < end; i++) {
      array[i] = value
    }
    return array
  },
  fromPairs: function (array) {
    var obj = {}
    for (var i = 0; i < array.length ; i++) {
      obj[array[i][0]] = array[i][1]
    }
    return obj
  },
  head: function(array) {
    return array[0]
  },
  indexOf: function(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value){
        return i
      }
    }
    return -1
  },
  initial: function(array) {
    return array.slice(0,array.length -1)
  },
  intersection: function(...args) {
    return [...args].reduce(function(a,b){
      var temp =[]

      if (a.length >= b.length) {
        for (var i =0; i < b.length; i ++){
          for (var j = 0; j < a.length; j++){
            if (b[i] == a[j]){
              temp.push(b[i])
              break
            }
          }
        }
      } else {
        for (var i =0; i < a.length; i ++){
          for (var j = 0; j < b.length; j++){
            if (a[i] == b[j]){
              temp.push(a[i])
              break
            }
          }
        }
      }
      return temp

    })
  },
  join: function (array,separator = ",") {
    return array.reduce(function(result,item){
      return result+""+separator+""+item
    })
  },
  last: function (array) {
    return array[array.length - 1]
  },
  lastIndexOf: function (array, value, fromIndex) {
    if (fromIndex < 0) {
      return -1
    }
    if ( fromIndex === undefined) {
      for (var i = array.length - 1; i >= 0; i--) {
        if ( array[i] === value) {
          return i
        }
      }
      return -1 
    }
    array = array.slice(0,array.length - fromIndex)
    for (var i = array.length - 1; i >= 0; i--) {
        if ( array[i] === value) {
          return i
        }
      }
      return -1 
  },
  pull: function (array,...value) {
    var result = []
    for (var i = 0; i < value.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[j] != value[i]) {
          result.push(array[j])
        }
      }
      array = result
      result = []
    }
    return array
  },
  nth: function(array, n = 0) {
    if (n >=0) {
      return array[n]
    } else {
      return array[array.length + n]
    }
  },
  pullAll: function (array,target) {
   return array.filter(function (item){
      return !target.includes(item)
    })
  },
  sortedIndex: function(array,value) {
    if (array[0] >= value) {
      return 0
    }
    if (array[array.length -1] < value) {
      return array.length
    }
    for (var i=0 ; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      } 
    }
  },
  tail: function (array) {
    return array.slice(1)
  },
  take: function (array,n = 1) {
    
    return array.slice(0,n)
  },

  takeRight: function (array, n=1) {

    if (n>=array.length) {
        return array
    }
    var newArr = []
    var count = 0
    for (var i = array.length-1 ; count < n; i--) {
        count++
      newArr.push(array[i])
    }
    return newArr.reverse()

  },
  uniq: function(array) {
    var obj = {}
    var newArr = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] in obj) {

      } else {
        obj[array[i]] = 1
        newArr.push(array[i])
      }
    }
    return newArr
  },
  without: function (array, ...value) {
    return array.filter(function(item){
      return !value.includes(item)
    })
  },

  xor: function(...arys) {
    var obj = {}
    var newArr =[]
    arys.reduce(function(result,item){
      return result = result.concat(item)
    },[]).forEach(function(value){
      if(value in obj) {
          obj[value]++
      } else {
        obj[value] = 1
      }

    })
    for (key in obj) {
      if (obj[key] ===1){
        newArr.push(+key)
      }
    }
    return newArr
  },


    






















}