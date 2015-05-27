/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
var sumAll = document.getElementById("sum-all");
sumAll.addEventListener("click", function() {
  var prices = document.getElementsByTagName("option");
  var sum = getSum(prices);
  var div = document.getElementById("results");
  div.innerHTML = sum;
});
