const container = document.querySelector('#root');
const input = document.querySelector('.searchInp');
const searchButton = document.querySelector('.searchBtn');
const countryName = document.querySelector('.countryName');

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => getData(data));

function getData(data) {
  let countries = data.map(item => item.name.common);
  searchButton.addEventListener('click', function () {
    for (let country of countries) {
      if (input.value === country) {
        countryName.textContent = `Welcome to ${country}`;
      }
    }
  });
}
