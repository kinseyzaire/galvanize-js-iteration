var sum = function(options){
   var count = 0;
   for (var i = 0; i < options.length; i++) {
      count += parseInt(options[i].value);
   }
      return count;
}


var avvg = function(options){
   count = sum(options);
   count = count/(options.length)
   console.log(count);
      return count;
}
