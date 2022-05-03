// Lab 8 for ART101
// In this lab we practice using .map() to apply a Function
// to every element in an array.
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

console.log("Nums: " + nums);
console.log("Sums(nums): " + sums(nums));
console.log("nums.map(isEven): " + nEven);
