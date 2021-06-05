// Local Storage
var date = new Date();
localStorage.setItem("date1", d1.getTime());
var date1 = new Date(parseInt(localStorage.getItem[date1]));
localStorage.setItem("date2", date);
var date1 = new Date(parseInt(localStorage.getItem[date2]));
Timedif = date2.getTime() - date1.getTime();
Daydif = Math.round (Timedif / (1000 * 3600 * 24));
document.querySelector("since").textContent = Daydif;