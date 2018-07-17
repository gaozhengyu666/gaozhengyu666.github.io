var gaozhengyu666 = {
  chunk: function(array, size) {
            var ary = []
  			for(var i = 0; i < array.lenth ; i+=2) {
  				ary.push(array.slice(i,size + i))
  			}
  			return ary

  }
}