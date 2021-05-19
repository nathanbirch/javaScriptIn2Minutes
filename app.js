/* 220 - age
65% is min Range
85% is max Range
*/

function getHealthyRange() {
  let age = parseInt(document.getElementById('userAge').value);

  let maxHeartRate = 220 - age;
  let lowRange = Math.round(maxHeartRate * 0.65);
  let highRange = Math.round(maxHeartRate * 0.85);
  var message =
    'Your Max Heart Rate is: ' +
    maxHeartRate +
    '.<br>' +
    'The slowest heart rate that will strengthen your heart is ' +
    lowRange +
    '.<br>' +
    'The highest heart rate that will strengthen your heart is ' +
    highRange +
    '.<br>';
  document.getElementById('outputDiv').innerHTML = message;
}
