const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    let counter;

    function step() {
        counter++;
        popupContent.style.top = counter * 2 + '%';
        if (counter < 10) {
            requestAnimationFrame(step);
        }
    }

    function isMobile() {
        return navigator.userAgent.match(
            /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
        );
    }

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!isMobile()) {
                popupContent.style.top = '-100%';
                popup.style.display = 'block';
                requestAnimationFrame(step);
                counter = -80;
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

function scrollToTarget(targetSelector) {
    if (targetSelector.length === 1 || document.querySelector(targetSelector) == null) {
        return;
    }
    const targetY = document.querySelector(targetSelector).getBoundingClientRect().top;
    const startY = window.pageYOffset;
    const totalDiffY = Math.abs(targetY - startY);
    const startTime = Date.now();
    const dir = targetY > startY ? 1 : -1;
    const pxInMs = 2;

    const animationFrame = function () {
        const diffTime = Date.now() - startTime;
        const diffY = diffTime * pxInMs;
        const y = startY + dir * diffY;
        window.scrollTo(0, y);
        if (diffY < totalDiffY) {
            requestAnimationFrame(animationFrame);
        } else {
            window.scrollTo(0, targetY);
        }
    };
    requestAnimationFrame(animationFrame);
}

document.addEventListener('click', (event) => {
    let target = event.target.closest('a');
    if (target && target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        scrollToTarget(target.getAttribute('href'));
    }

    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
});

export default togglePopup;