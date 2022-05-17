// Lab 13 for ART101
// In this lab we practice using for loops and conditionals.
// Link: https://thataidanguy.github.io/art101/lab13/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 13's index.html.)
// Written by Aidan Andreasen
// on 5.16.2022

$("#button").click( function looper() {

//Clear existing div content
$("#output").empty();

//Define Variables
var max = $("#max").val();

var num_inputs = ["#f0","#f1","#f2","#f3"];
var label_inputs = ["#l0", "#l1", "#l2", "#l3"];
var factors = [];
var labels = [];
var named = false;
//Quick loop to assign factors[0-3] number values in a more interesting way
//than just typing four repetitive lines (ditto with labels[0-3])
for(let i=0;i<4;i++) {
  let j=$(num_inputs[i]).val();
  factors.push(j);
  let k=$(label_inputs[i]).val();
  labels.push(k);
}

//loop over all numbers to factor
for(let i=1;i<=max;i++) {
  $("#output").append("<p>" + i + " - ");
  named = false;
  //loop over all factors
  for(let j=0;j<4;j++) {
    if (i%factors[j]===0) {
      $("#output").append(labels[j]);
      named = true;
    }
  }
  //account for numbers without factors
  if (!named) {
    $("#output").append("Nothing");
  }
  //Append ! and end paragraph
  $("#output").append("!</p>");
//Then move on to next iteration
};
});
