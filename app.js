function computeAreaOfCircle() {
  let r = parseFloat(document.getElementById('radius').value);

  let area = Math.PI * r ** 2;

  document.getElementById('output').innerHTML = 'The area is: ' + area;
}
