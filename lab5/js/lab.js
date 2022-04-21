/*
Author: Aidan Andreasen <ajandrea@ucsc.edu>
Created: 21 April
License: Public Domain
*/

//Define Variables
make = "Toyota";
model = "RAV4";
color = "Blue";
year = 2010;
ownIt = false;

//calculate
age = 2022 - year;

//I'm making <br> a variable here for convenience
br = "<br>";

//output
document.writeIn("Make: " + make + br);
document.writeIn("Model: " + model + br);
document.writeIn("Color: " + color + br);
document.writeIn("Year: " + year + br);
document.writeIn("Own It: " + ownIt + br);
document.writeIn("Age: " + age + " years<br>");
