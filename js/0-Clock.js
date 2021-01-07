window.onload = function() {
    countUpFromTime("Jan 7, 2021 9:05:32", 'clock');
};

function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = pad(days);
    idEl.getElementsByClassName('hours')[0].innerHTML = pad(hours);
    idEl.getElementsByClassName('minutes')[0].innerHTML = pad(mins);
    idEl.getElementsByClassName('seconds')[0].innerHTML = pad(secs);
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }
  function pad(val){
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    } 
  }