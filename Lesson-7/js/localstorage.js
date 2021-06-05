// Local Storage

let date1 = new Date(parseInt(localStorage.getItem[date1]));
let date2 = new Date(parseInt(localStorage.getItem[date2]));
Timedif = date2 - date1;
Daydif = Math.round (Timedif / (1000 * 3600 * 24));
document.querySelector("since").textContent = `Your last visit was: ${Daydif} days ago`;

