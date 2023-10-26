const secondsDisplay = document.getElementById("seconds-display");
let seconds = 1;
let minutes = 0;
let interval = setInterval(function () {
    if (minutes <= 2) {
        if (seconds > 59) {
            seconds = 0;
            minutes++;
            // secondsDisplay.textContent = `${minutes++} min  ${seconds++} sec`;
        }
        secondsDisplay.textContent = `${minutes} min  ${seconds++} sec`;
    } else {
        clearInterval(interval);
        alert("The page is out of date!");
    }
}, 1000);