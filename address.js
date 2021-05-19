function createAddress() {
  let name = document.getElementById('name').value;
  let street = document.getElementById('street').value;
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  let zip = document.getElementById('zip').value;

  let address = '';

  address += name + '<br>';
  address += street + '<br>';
  address += city + ', ' + state + ', ' + zip;

  document.getElementById('output').innerHTML = address;
}
