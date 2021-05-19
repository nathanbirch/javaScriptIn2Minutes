function computeAreaOfRectangle() {
  let l = document.getElementById('length').nodeValue;
  let w = document.getElementById('width').nodeValue;

  let area = l * w;

  document.getElementById('output').innerHTML = area;
}
