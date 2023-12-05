'use strict';

/*
======= Перша задача =======
*/

function dayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "П'ятниця";
        case 6:
            return "Субота";
        case 7:
            return "Неділя";
        default:
            return "Невірний номер дня тижня";
    }
}

const dayNumber = 3;
const dayOfWeekUkraine = dayOfWeek(dayNumber);
console.log("День тижня:", dayOfWeekUkraine);

/*
======= Друга задача =======
*/

