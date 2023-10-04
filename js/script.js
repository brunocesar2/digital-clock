const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
if (hours && minutes && seconds) {
  function clock() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    
    hours.innerHTML = formatTime(currentHour);
    minutes.innerHTML = formatTime(currentMinutes);
    seconds.innerHTML = formatTime(currentSeconds);
  }
  function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
  }
  setInterval(clock, 1000);
}
