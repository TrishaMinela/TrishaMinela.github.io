const townData = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townData) 
  .then(function (response) { 
    return response.json();
  })
  .then(function (town_data) { 
    const towns = town_data['towns']; 
    const forpage = towns.filter(specific => specific.name == "Soda Springs" || specific.name == "Fish Haven" || specific.name == "Preston");

    forpage.forEach(towns => {
      let specificTown = document.createElement('section');
      let h2 = document.createElement('h2');
      let h4 = document.createElement('h4');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p')
      let townImage = document.createElement('img');

      h2.textContent = `${towns.name}`;
      specificTown.appendChild(h2);

      h4.textContent = `${towns.motto}`;
      specificTown.appendChild(h4);

      year.textContent = `Year Founded: ${towns.yearFounded}`;
      specificTown.appendChild(year)

      population.textContent = `Population: ${towns.currentPopulation}`;
      specificTown.appendChild(population);

      rain.textContent = `Annual Rain Fall: ${towns.averageRainfall}`;
      specificTown.appendChild(rain);

      townImage.setAttribute('src', towns.photo);
      townImage.setAttribute('alt', `The image of: ${towns.name}`);
      specificTown.appendChild(townImage);

      document.getElementById('getjson').appendChild(specificTown);
      
    })
});

