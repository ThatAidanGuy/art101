// Lab 7 for ART101
// In this lab we make functions to familiarize ourselves
// with that JavaScript construct.
// Link: https://thataidanguy.github.io/art101/lab7/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 7's index.html.)
// Written by Aidan Andreasen
// on 4.27.2022

//Define function
function sortUserName() {
  //I prompt the user for a username
  var userName = window.prompt("This is a stickup! Tell me your username or I'll shoot this (hot) dog!");
  //I split the username into a list of characters
  userName = userName.split("");
  //I sort the username's characters alphabetically
  userName = userName.sort(function(a,b) {
    //To sort alphabetically, I make an example of how to handle variables
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA > nameB){
      return 1; // if A>B B comes first
    } if (nameB > nameA) {
      return -1; // if B>A A comes first
    }
    return 0; //otherwise it's a tie so just return them in input order
  });
  //I iterate over a username and remove spaces
  for (let i=0;i<userName.length;i++) {
    if (userName[i]===" ") {
      //At position i (the space), remove one variable
      userName.splice(i,1);
    }
  }
  //I convert the username back to a string
  userName = userName.join("");
  //Return the newly sorted username
  return userName;
}

//output
document.getElementById("output").innerHTML = "That name sucks. But I fixed it for you: " +
sortUserName() + " ... much catchier. <br><br> Anyway, you did what I asked. The hot dog lives!"
