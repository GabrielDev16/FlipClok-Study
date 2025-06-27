const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(function() {
    let dateToday = new Date();
    let hr = String(dateToday.getHours()).padStart(2, '0');
    let min = String(dateToday.getMinutes()).padStart(2, '0');
    let sec = String(dateToday.getSeconds()).padStart(2, '0');

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
}, 1000);