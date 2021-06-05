// Images Lazy Load

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


// Hamburger Menu 
function toggleMenu() {
  document.getElementsByClassName("hamburger")[0].classList.toggle("responsive");
}


// Date Modified
let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let month = date.getMonth()+1;
let daynumber = date.getDate();
document.querySelector("#year").textContent = year;
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let nameday = daylist[day];
let monthlist = ["January", "February", "March", "April" ,"May", "June", "July", "August", "September", "October", "November", "December"]
let monthname = monthlist[month];
let datemodified = `${nameday}, ${daynumber} ${monthname} ${year}`;
document.querySelector("#current").textContent =  datemodified;





// Local Storage
var date1 = new Date();
window.localStorage.setItem("date1", date);
var date2 = new Date();
window.localStorage.setItem("date2", date);
Timedif = date2.getTime() - date1.getTime();
Daydif = Math.round (Timedif / (1000 * 3600 * 24));
document.querySelector("since").textContent = Daydif;