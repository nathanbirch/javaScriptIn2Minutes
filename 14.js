function printMessage() {
  document.getElementById('output').innerHTML = 'Happy Wednesday!';
  let someText = document.getElementById('userInput').value;
  document.getElementById('userTextOutput').innerHTML = someText;
}

let x = 5;
let y = 3;
// alert(((x + y) * 2) / 2 ** 2);

x *= 2;
alert(x);

alert(20 %= 3);

x++; // x += 1
x--; // x +-= 1
