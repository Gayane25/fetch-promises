const container = document.querySelector('#root');
const wrapperInp = document.querySelector('#input-wrapper');
const input = document.querySelector('.searchInp');
const searchButton = document.querySelector('.searchBtn');
const countryName = document.querySelector('.countryName');
const countryCapital = document.querySelector('.countryCapital');
const countryPopulation = document.querySelector('.countryPopulation');
let countryFlag = document.querySelector('.countryFlag');
let countryCoat = document.querySelector('.countryCoat');
let imgFlag = document.querySelector('.imgFlag');
let imgCoat = document.querySelector('.imgCoat');
// let countryMap = document.querySelector('.countryMap');

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => getData(data));

function getData(data) {
  // let countries = data.map(item => item.name.common);
  searchButton.addEventListener('click', function () {
    for (let country of data) {
      if (input.value === country.name.common) {
        wrapperInp.style.paddingTop = '50px';
        wrapperInp.style.paddingBottom = '50px';

        countryName.textContent = `${country.name.common}, oficially ${country.name.official}`;
        countryCapital.textContent = `The capital is ${country.capital}`;
        countryPopulation.textContent = `Its population is ${country.population}`;
        imgFlag.src = country.flags.png;
        imgFlag.style.width = '500px';
        imgFlag.style.height = '350px';
        imgCoat.src = country.coatOfArms.png;
        imgCoat.style.width = '500px';
        imgCoat.style.height = '350px';
      }
    }
  });
}
