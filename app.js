// https://keisan.casio.com/exec/system/1223388402
function calculateTorusVolume() {
  let a = parseFloat(document.getElementById('inner').value);
  let b = parseFloat(document.getElementById('outer').value);

  let volume = (1 / 4) * Math.PI ** 2 * (a + b) * (b - a) ** 2;

  document.getElementById('outputDiv').innerHTML = volume;
}
