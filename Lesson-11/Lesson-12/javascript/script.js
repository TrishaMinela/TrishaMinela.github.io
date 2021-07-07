// Hamburger Menu 
function toggleMenu() {
    document.getElementsByClassName("hamburger")[0].classList.toggle("responsive");
  }
  
  
  // Date 
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
  let current = `${nameday}, ${daynumber} ${monthname} ${year}`;
  document.querySelector("#currently").textContent =  current;
  
  
  