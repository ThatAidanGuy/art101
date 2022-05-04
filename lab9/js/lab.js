// Lab 9 for ART101
// In this lab we practice manipulating the DOM structure.
// Link: https://thataidanguy.github.io/art101/lab9/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 9's index.html.)
// Written by Aidan Andreasen
// on 5.3.2022

//Output Element = Main div
var outputEl = document.getElementById("div1");
//New Element 1 (note: p is the type of element, not a custom name)
var new1El = document.createElement("p");
new1El.innerHTML = "Guess what this is?";
//New Element 2
var new2El = document.createElement("p");
new2El.innerHTML = "That's right! It's JavaScript!";
//Append both elements to main div (one via appendChild, one via insertBefore)
outputEl.appendChild(new2El); // at the end of outputEl (blank) goes new2El
outputEl.insertBefore(new1El, outputEl.children[0]); // before outputEl.children[0]
// which is new2El, insert new1El
