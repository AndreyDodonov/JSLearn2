let greeting = document.createElement('div');
const dayOfWeekArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const dayTime = {
    night: ['Доброй ночи', 0, 4],
    morning: ['Доброе утро', 4, 12],
    day: ['Добрый день', 12, 18],
    evening: ['Добрый вечер', 18, 24]
};
let dateNow = new Date();
let dayOfWeek = dateNow.getDay();
let dayHour = dateNow.getHours();
let deadline = new Date('31 dec 2019');

let currentDayTime = Object.values(dayTime).find(item => {
    return (item[1] <= dayHour) && (item[2] > dayHour);
});
greeting.textContent = `${currentDayTime[0]}`;
document.body.appendChild(greeting);
let today = document.createElement('div');
today.textContent = `Сегодня: ${dayOfWeekArr[dayOfWeek]}`;
document.body.appendChild(today);

function addZero(time) {
    let newTime = time;
    if (time < 10) {
        newTime = '0' + time;
    }
    return newTime;
}

let newElemTime = document.createElement('div');
newElemTime.textContent = `Текущее время: 
${addZero(dateNow.getHours())}:${addZero(dateNow.getMinutes())}:${addZero(dateNow.getSeconds())}`;
document.body.appendChild(newElemTime);
let newElemCounter = document.createElement('div');
newElemCounter.textContent = `До нового года осталось: 
${Math.floor((deadline.getTime()-dateNow.getTime())/1000/24/60/60)} дней`;
document.body.appendChild(newElemCounter);