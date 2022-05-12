// Lab 11 for ART101
// In this lab we practice using jQuery.
// Link: https://thataidanguy.github.io/art101/lab11/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 11's index.html.)
// Written by Aidan Andreasen
// on 5.11.2022

//Each button works the same way:
//First, get the element, have it do a function when clicked
$("#c_button").click( function() {
  //Then, make that function toggling on a class
  $("#challenge").toggleClass("class1");
})

//Repeat
$("#p_button").click( function() {
  $("#problems").toggleClass("class2");
})

$("#r_button").click( function() {
  $("#results").toggleClass("class3");
})
