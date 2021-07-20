const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=14.1384&lon=121.3198&appid=79cf3ff62a1685b8d326951e4140b61b";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 1;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

   
    apiURL.forEach( x => {
        let date = new Date();
        document.getElementById(`days${day}`).textContent = days[date.getDay()];
        document.getElementById(`temp${day}`).textContent = `${current.temp}°F`;
        document.getElementById(`description${day}`).textContent = `${current.weather.description}`;
        document.getElementById(`humidity${day}`).textContent = `${current.humidity}`;
        day++
    })
    })
    

