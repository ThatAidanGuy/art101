// Lab 10 for ART101
// In this lab we practice using event handlers.
// Link: https://thataidanguy.github.io/art101/lab10/index.html
// File: lab.js (This file contains JavaScript to run in
// Lab 10's index.html.)
// Written by Aidan Andreasen
// on 5.6.2022

//Get elements
var buttonEl = document.getElementById("my-button");
var inputEl = document.getElementById("my-input");




//Define function (the following is adapted from Lab 7)
function sortUserName(userName) {
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




//Add event listener
buttonEl.addEventListener("click", function() {
  // Get text input as variable
  var inputValue = document.getElementById("my-input").value;
  //Alert text input (test)
  alert("Sorted input: " + sortUserName(inputValue));
  //Change output to text (still bugfixing)
  document.getElementById("output").innerHTML = "Sorted input: " + sortUserName(inputValue);
});
