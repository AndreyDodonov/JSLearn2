window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    /* timer */
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinute = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateNow - dateStop)/ 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            
        timerHours.textContent = hours;
        timerMinute.textContent = minutes;
        timerSeconds.textContent = seconds;    
            
    }

    countTimer('01 july 2019');

});