// Local Storage

if (typeof Storage !== "undefined") {
        var date1 = new Date(parseInt(localStorage.getItem[date1]));
        var date2 = new Date(parseInt(localStorage.getItem[date2]));
        var Timedif = date2 - date1;
        var Daydif = Math.round (Timedif / (1000 * 3600 * 24));
        document.querySelector("#since").textContent = Daydif;
    } 


var load;
window.onload = function() {

  start = new Date();

  var welcomeText;

  if (typeof Storage !== "undefined") {

      if (localStorage.visitcount && !isNaN(localStorage.visitcount)) {

        var durationSinceLastVisit = start - new Date(localStorage.lastVisitDate);


          var msPerDays= 24*60*60*1000;

          var daysSinceLastVisit = Math.floor(durationSinceLastVisit/msPerDays);

          var msPerMinutes= 60*1000;

          var timeSpentInMinutes = Math.floor(localStorage.duration/msPerMinutes);

          welcomeText = "Welcome back! Last visit was " + daysSinceLastVisit + " day(s) ago, "+timeSpentInMinutes + " minute(s) spent on this page during your " + localStorage.visitcount + " visits.";

          
      } else {

         localStorage.visitcount = 1;

         localStorage.duration = 0;

         localStorage.lastVisitDate = start;

         welcomeText = "This is your first time here! Welcome.";

    }

  } else {

      welcomeText="Sorry, your browser does not support web storage...";

 

  }

\
};

 

window.onunload = function() {

  var end = new Date();

  var timeSpent = Math.abs(end - start);

  if (typeof Storage !== "undefined") {

    localStorage.visitcount = Number(localStorage.visitcount) + 1;

    localStorage.duration = Number(localStorage.duration) + timeSpent;

    localStorage.lastVisitDate = end;

  }

};
