//url source
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//fetch method
fetch(requestURL) //feed it an argument, the URL 
  .then(function (response) { //returns a promise that will be used as another argument
    return response.json();
  })
  .then(function (jsonObject) { //working with the converted response
    const prophets = jsonObject['prophets']; //jsonObject can be named something different and prophets was already defined in the file
    
    for (let i = 0; i < prophets.length; i++ ) {
      //variables for all html elements
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let dob = document.createElement('p');
      let pob = document.createElement('p');
      let image = document.createElement('img');

      //create content and append it
      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      card.appendChild(h2);

      dob.textContent = `Date of Birth: ${prophets[i].birthdate}`;
      card.appendChild(dob);

      pob.textContent = `Place of Birth: ${prophets[i].birthplace}`;
      card.appendChild(pob);
      
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', `The official portrait of: ${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
      
    }
  });



