// Local Storage

var date1 = new Date(parseInt(localStorage.getItem[date1]));
var date2 = new Date(parseInt(localStorage.getItem[date2]));
var Timedif = date2 - date1;
var Daydif = Math.round (Timedif / (1000 * 3600 * 24));
document.querySelector("since").textContent = `Your last visit was: ${Daydif} days ago`;

