window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    /* Timer */
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
                timeRemaining, hours, minutes, seconds
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
    countTimer('5 august 2019');

    /* menu */

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
           menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', () => {
           handlerMenu();
        });    
        closeBtn.addEventListener('click', () => {
            handlerMenu();
        });

         menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
        });
    };
    toggleMenu();

    /* popup */

    const togglePopup = () => {
        const popup  = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');

              popupBtn.forEach((elem) => {
                  elem.addEventListener('click', () => {
                      popup.style.display = 'block';
                  });
              });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });      

    };

    togglePopup();
});