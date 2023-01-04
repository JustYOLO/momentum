const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const currentDate = new Date();
    const christmas = new Date(currentDate.getFullYear(), 11, 25);
    if(currentDate.getMonth === 11 && currentDate.getDate() > 25) { // if this year's christmas passes
        christmas.setFullYear(christmas.getFullYear + 1);
    }
    console.log(christmas.toString());
    const timeUntilChristmas = christmas.getTime() - currentDate.getTime(); // get time difference between today and christmas
    const daysUntilChristmas = Math.floor(timeUntilChristmas / (1000 * 60 * 60 * 24)); // calculate days (ms to days)
    const hoursUntilChristmas = Math.floor((timeUntilChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calculate hours
    const minutesUntilChristmas = Math.floor((timeUntilChristmas % (1000 * 60 * 60)) / (1000 * 60)); // calcuate minutes
    const secondsUntilChristmas = Math.floor((timeUntilChristmas % (1000 * 60)) / 1000); // calcuate seconds left
    clockTitle.innerText = `${String(daysUntilChristmas).padStart(3, "0")}d ${String(hoursUntilChristmas).padStart(2, "0")}h ${String(minutesUntilChristmas).padStart(2, "0")}m ${String(secondsUntilChristmas).padStart(2, "0")}s`;
}

getClock()
setInterval(getClock, 1000);