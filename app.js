// https://www.easycalculation.com/engineering/electrical/cable-length-cable-span.php
// L = S + ((8 * d2) / (3 * S))
// Where,
// L = Cable Length
// S = Cable Span
// d = Cable Sag

function computeLengthOfCable() {
  let span = parseFloat(document.getElementById('span').value);
  let sag = parseFloat(document.getElementById('sag').value);

  let l = span + (8 * sag ** 2) / (3 * span);

  document.getElementById('outputDiv').innerHTML = Math.ceil(l);
}
