function countTimer(deadline) {
    let useGMT = false;
    let diff = new Date().getTimezoneOffset() * 60000;
    let timerHours = document.querySelector('#timer-hours');
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = +(dateStop - dateNow) / 1000;
        if (useGMT) {
            dateNow = new Date().getTime() + diff;
            dateStop = new Date(dateNow).setHours(24, 0, 0);
        }
        let seconds = (dateStop < dateNow) ? 0 : Math.floor(timeRemaining % 60);
        let minutes = (dateStop < dateNow) ? 0 : Math.floor((timeRemaining / 60) % 60);
        let hours = (dateStop < dateNow) ? 0 : Math.floor(timeRemaining / 60 / 60);
        if (seconds == 0 && minutes == 0 && Math.floor((dateNow + diff) / 60 / 60 / 1000) == 0) {
            useGMT = true;
        }
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }

    function updateClock() {
        let timer = getTimeRemaining();
        timerHours.textContent = timer.hours > 9 ? timer.hours : '0' + timer.hours;
        timerMinutes.textContent = timer.minutes > 9 ? timer.minutes : '0' + timer.minutes;
        timerSeconds.textContent = timer.seconds > 9 ? timer.seconds : '0' + timer.seconds;
        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    }

    setInterval(updateClock, 1000);
}

export default countTimer;