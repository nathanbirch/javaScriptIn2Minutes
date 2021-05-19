// assume tax removes 15%
function calculatePay() {
  let hours = parseFloat(document.getElementById('hours').value);
  let wage = parseFloat(document.getElementById('wage').value);

  let pay = hours * wage * 0.85;

  document.getElementById('outputDiv').innerHTML = '$' + pay.toLocaleString();
}
