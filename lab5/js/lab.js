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
document.write("Make: " + make + br);
document.write("Model: " + model + br);
document.write("Color: " + color + br);
document.write("Year: " + year + br);
document.write("Own It: " + ownIt + br);
document.write("Age: " + age + " years<br>");
