// Lab 12 for ART101
// In this lab we practice using conditionals.
// Link: https://thataidanguy.github.io/art101/lab12/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 12's index.html.)
// Written by Aidan Andreasen
// on 5.13.2022

//Create Function
function sortingHat(str) {
  //Define function variables
  var length = str.length;
  var mod = length % 4;
  let house;
  let description;
  //Conditional with houses and descriptions
  if (mod===0) {
    house= "Gryffindor";
    description = "Don't let this go to your head.";
  } if (mod===1) {
    house= "Ravenclaw";
    description = "Wait, who were those guys again?";
  } if (mod===2) {
    house= "Hufflepuff";
    description = "\"Where Mediocrity is Celebrated\"";
  } if (mod===3) {
    house= "Slytherin";
    description = "You're literally pure evil. Let's teach you superpowers!";
  // Return statement
} return house + "!<br>" + description + "<br>";
}

//Create event handler in jQuery
$("#button").click( function() {
  //Get input as variable
  var name = $("#input").val();
  //Save function(input) to variable
  var house = sortingHat(name);
  //Output to HTML
  $("#output").append("The sorting hat has sorted you into " + house);
})
