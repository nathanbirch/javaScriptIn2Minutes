function computeAreaOfRectangle() {
  let l = parseFloat(document.getElementById('length').value);
  let w = parseFloat(document.getElementById('width').value);

  let area = l * w;

  document.getElementById('output').innerHTML = 'The area is: ' + area;
}
