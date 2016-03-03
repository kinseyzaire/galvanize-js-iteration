var allOpts = $("select option");

$("#sum-all").click(function(){
   var numsss = sum(allOpts).toFixed(2);
   $("#results").append("<h1>$" + numsss + "</h1>");
})

$("#average-all").click(function(){
   var avvsss = avvg(allOpts).toFixed(2);
   $("#results").append("<h1>$" + avvsss + "</h1>");
})
