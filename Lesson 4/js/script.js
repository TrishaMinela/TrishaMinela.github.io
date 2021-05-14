document.querySelector("#update").textContent = document.lastModified;

let date = new Date();
let year = date.getFullYear();
document.querySelector("#year").textContent = year;

function toggleMenu() {
    document.getElementsByClassName("hamburger")[0].classList.toggle("responsive");
}