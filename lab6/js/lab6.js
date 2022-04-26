// Lab 6 for ART101
// In this lab we make arrays and objects to familiarize ourselves
// with those JavaScript constructs.
// Link: https://thataidanguy.github.io/art101/lab6/index.html
// File: lab6.js (This file contains JavaScript to run in
// Lab 6's index.html.)
// Written by Aidan Andreasen
// on 4.25.2022

//Define variables
var myTransport = ["walking", "bus"];
var myMainRide = {
  make: "Toyota",
  model: "RAV4",
  color: "Blue",
  year: 2010,
  age: 2022 - self.year
};

//Output to Web Page

document.writeln("How I actually get around: ", myTransport, "</br>");
document.writeln("Family car I used for Lab 5 (so not quite <i> my main ride </i>): <pre>",
  JSON.stringify(myMainRide, null, "\t"), "</pre>");
