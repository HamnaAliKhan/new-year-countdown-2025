const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Get the current year and next year
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

// Set next year's New Year date explicitly in UTC
//const nextYearDate = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0));
const nextYearDate = new Date(new Date().getTime() + 5000); // 10 seconds from now

// Helper function to format numbers to two digits
const formatValue = (value) => (value < 10 ? `0${value}` : value);

let timer = setInterval(() => {
    const currentDate = new Date();
    const totalSeconds = Math.floor((nextYearDate - currentDate) / 1000);

    const daysLeft = Math.floor(totalSeconds / 3600 / 24);
    const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
    const minutesLeft = Math.floor(totalSeconds / 60) % 60;
    const secondsLeft = totalSeconds % 60;

    if (days && hours && minutes && seconds) {
        days.innerHTML = formatValue(daysLeft);
        hours.innerHTML = formatValue(hoursLeft);
        minutes.innerHTML = formatValue(minutesLeft);
        seconds.innerHTML = formatValue(secondsLeft);
    }

    // Stop countdown and redirect after hitting 0
    if (totalSeconds <= 0) {
        clearInterval(timer);
        window.location.href = 'wish.html';
    }
}, 1000);
 //animation: moveFont 2s ease-in;
 //@keyframes moveFont {
   // 0% {
    //    opacity: 0;
      //  transform: translateY(-50px) scale(0.5);
    //}
    //50% {
      //  opacity: 0.5;
        //transform: translateY(0px) scale(0.75);
    //}
    //100% {
      //  opacity: 1;
        //transform: translateY(0) scale(1);
    //}
//}