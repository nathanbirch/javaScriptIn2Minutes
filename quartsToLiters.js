function calculateLiters() {
  let volumeInQuarts = parseFloat(document.getElementById('quarts').value);

  let litersInQuart = 0.946353;
  let volumeInLiters = volumeInQuarts * litersInQuart;

  var prettyString =
    'There are ' + volumeInLiters + ' liters in ' + volumeInQuarts + ' quarts.';
  document.getElementById('outputDiv').innerHTML = prettyString;
}
