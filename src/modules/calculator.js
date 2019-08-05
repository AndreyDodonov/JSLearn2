const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;

        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;
        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
        } else {
            total = 0;
        }
        const animation = () => {
            let totalNumber = +document.getElementById('total').textContent;
            const counter = totalValue.textContent,
                iter = Math.ceil(Math.abs(totalNumber - total) / 20);

            if (Math.abs(total - totalNumber) < iter) {
                totalNumber = total;
                totalValue.textContent = +total;
            }
            if (total > totalNumber) {
                totalValue.textContent = +counter + iter;
                requestAnimationFrame(animation);
            } else if (total < totalNumber) {
                totalValue.textContent = +counter - iter;
                requestAnimationFrame(animation);
            }
        };
        requestAnimationFrame(animation);
    };
    calcBlock.addEventListener('change', (event) => {

        const target = event.target;
        if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
            countSum(price);
        }
    });

    calcBlock.addEventListener('input', (event) => {
        const target = event.target;
        if (target.matches('input.calc-item')) {
            target.value.replace(/[^\d]/g, '');
        }
    });
};

export default calculator;