

    const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=14.1384&lon=121.3198&appid=79cf3ff62a1685b8d326951e4140b61b";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        document.getElementById(`temp`).textContent = `${current.temp}°F`;
        document.getElementById(`description`).textContent = `${current.weather.description}`;
        document.getElementById(`humidity`).textContent = `${current.humidity}`;
    });
    
    

    

    

