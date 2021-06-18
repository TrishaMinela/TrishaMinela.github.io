const townData = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townData) 
  .then(function (response) { 
    return response.json();
  })
  .then(function (town_data) { 
    const towns = town_data['towns']; 
    for (let i = 0; i < towns.length; i++ ) {
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let h4 = document.createElement('h4');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p')
      let townImage = document.createElement('img');

      h2.textContent = `${towns[i].name}`;
      town.appendChild(h2);

      h4.textContent = `${towns[i].motto}`;
      town.appendChild(h4);

      year.textContent = `Year Founded: ${towns[i].yearFounded}`;
      town.appendChild(year)

      population.textContent = `Population: ${towns[i].currentPopulation}`;
      town.appendChild(population);

      rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;
      town.appendChild(rain);

      townImage.setAttribute('src', towns[i].photo);
      townImage.setAttribute('alt', `The image of: ${towns[i].name}`);
      town.appendChild(townImage);

      document.getElementById('getjson').appendChild(town);
      
    }
  });



