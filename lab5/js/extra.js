var uMake, uModel, uColor, uYear;
function createCar() {
  uMake = document.getElementByID("uMake").value;
  uModel = document.getElementByID("uModel").value;
  uColor = document.getElementByID("uColor").value;
  uYear = document.getElementByID("uYear").value;
  uAge = 2022 - uYear;
  alert("Your car is a " + uYear + " " + uColor + " " + uMake + " " + uModel + " that is " + uAge + " years old!");
}
