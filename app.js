function calculateMileage() {
  let odometerStart = parseFloat(
    document.getElementById('odometerStart').value
  );
  let odometerEnd = parseFloat(document.getElementById('odometerEnd').value);
  let gallonsUsed = parseFloat(document.getElementById('gallonsUsed').value);

  let distance = odometerEnd - odometerStart;

  let mileage = distance / gallonsUsed;

  var unnecessaryOutputString =
    'Congrats! You got ' + Math.round(mileage) + ' miles per gallon!';
  document.getElementById('outputDiv').innerHTML = unnecessaryOutputString;
}
