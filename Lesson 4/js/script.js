function toggleMenu() {
    document.getElementsByClassName("hamburger")[0].classList.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();
document.querySelector("#year").textContent = year;


let month = date.getMonth()+1;
let day = date.getDate();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.querySelector("#current").textContent =  daylist[day] + ", " + day + " " + month + " " + year;
