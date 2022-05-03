// Lab 8 for ART101
// In this lab we practice using anonymous functions and call backs.
// Link: https://thataidanguy.github.io/art101/lab8/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 8's index.html.)
// Written by Aidan Andreasen
// on 5.2.2022

//Define array
var nums = [1,2,3,4,5];

//Define Function 1 (add up numbers in array)
function sums(nList) {
  var results = 0;
  for (let i=0;i<nList.length;i++) {
    results += nList[i];
  } return results;
}

// Define function 2, and apply to all numbers
var nEven = nums.map(function isEven(input) {
  return (input % 2 == 0);
})

//Printed to console
console.log("Nums: " + nums);
console.log("Sums(nums): " + sums(nums));
console.log("nEven: " + nEven);

//Printed to HTML
document.getElementById("output0").innerHTML = "<h2> JavaScript Preview! </h2>";
document.getElementById("output1").innerHTML = "Nums: " + nums;
document.getElementById("output2").innerHTML = "Sums(nums): " + sums(nums);
document.getElementById("output3").innerHTML = "nEven: " + nEven;
