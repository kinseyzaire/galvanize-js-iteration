/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
// var test = [1,2,3,4,5]

var allOpts = $("select option");
$("#sum-all").click(function(){
   var sssumsss = sum(allOpts).toFixed(2);
   $("#results").append("<h1>$" + sssumsss + "</h1>");
})
