var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}
var offset = -4;


function clock() {


  var weekday = new Array(7);
  d = new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  nd = new Date(utc + (3600000 * offset));  
  
  h = nd.getHours();  
  m = nd.getMinutes();
  s = nd.getSeconds();
            
      
  var ampm = h >= 12 ? 'pm' : 'am';
      
      date = nd.getDate(),
      month = nd.getMonth() + 1,
      year = nd.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
      theampm = document.querySelector('.ampm'),

      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  
      var day = weekday[nd.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
  theampm.innerHTML = ampm;
}

setInterval("clock()", 100);
