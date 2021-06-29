const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=79cf3ff62a1685b8d326951e4140b61b&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 1;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const forecast = jsObject.list.filter( forecast => forecast.dt_txt.includes("18:00:00"));
    console.log(forecast);
    forecast.forEach( x => {
        let date = new Date(x.dt_txt);
        document.getElementById(`days${day}`).textContent = days[date.getDay()];
        document.getElementById(`fiveday${day}`).src = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;
        document.getElementById(`fiveday${day}`).alt = "weather icon";
        document.getElementById(`daytemp${day}`).textContent = `${x.main.temp}°F`;
        day++
    })
    

});



// Hamburger Menu 
function toggleMenu() {
    document.getElementsByClassName("hamburger")[0].classList.toggle("responsive");
  }
  
  

  // weather

  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=79cf3ff62a1685b8d326951e4140b61b&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = jsObject.weather[0].main;
    const temperature = document.getElementById('temperature').textContent = jsObject.main.temp; 
    document.getElementById('humidity').textContent = jsObject.main.humidity; 
    const speed = document.getElementById('speed').textContent = jsObject.wind.speed; 

    
if(temperature <=50 && speed >= 4.8){
    let exponent = Math.pow(speed, 0.16);
    let windchill = 35.74 + 0.6215 * temperature - 35.75 * exponent + 0.4275 * temperature * exponent;
    let output = windchill.toFixed(0); 
    document.getElementById('windchill').textContent = output + "°F";  
}

else{
    document.getElementById('windchill').textContent = "°F";
}

});







