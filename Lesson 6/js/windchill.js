let temperature = document.getElementById('temperature').textContent;
let speed = document.getElementById('speed').textcontent;

if(temp <=10 && speed >= 4.8){
    let exponent = Math.pow(speed, 0.16);
    let windchill = 5.74 +0.6215 * temperature - 35.75 * exponent +0.4275 * temperature * exponent;
    document.getElementById('windchill').innerHTML = windchill + "&deg;C"; 
}

else{
    document.getElementById('windchill').textContent = "N/A";
}