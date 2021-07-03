const townData = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townData) 
  .then(function (response) { 
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns']; 
    for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == 'Fish Haven') {
     let events = towns[i].events;
     for (let i=0; i < events.length; i++) {
     let event = document.createElement('p');
     event.innerHTML = events[i];
     document.querySelector('#event').appendChild(event);
   }
 }
}
});