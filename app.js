function numberOfStacks() {
  let totalBoxes = parseInt(document.getElementById('totalBoxes').value);
  let inEachStack = parseInt(document.getElementById('inEachStack').value);

  let numberOfStacks = Math.ceil(totalBoxes / inEachStack);

  document.getElementById('outputDiv').innerHTML = numberOfStacks;
}
