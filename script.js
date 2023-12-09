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

function toCamelCase(str) {
  const words = str.split("_");
  const result = words.map((word) => {
    if (/[a-z]/.test(word[0])) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  return result.join("");
}

const str = "var_text_hello";
const result = toCamelCase(str);
console.log(result);

/*
======= Третя задача =======
*/

function fillArrayWithX() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push("x");
  }
  return array;
}

const resultArray = fillArrayWithX();
console.log(resultArray);

/*
======= Четверта задача =======
*/

function getNumberConsole(a) {
  if (a > 0) {
    return function () {
      console.log(1);
    };
  } else {
    return function () {
      console.log(2);
    };
  }
}

const a = 1;
const f = getNumberConsole(a);
f();

/*
======= П`ята задача =======
*/

function ggg(func1, func2) {
  return func1() + func2();
}

const anonymNumbers = ggg(
  function() {
    return 3;
  },
  function() {
    return 4;
  }
);

console.log(anonymNumbers);

/*
======= Шоста задача =======
*/

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const compare = compareArrays(arr1, arr2);

console.log(compare);

/*
======= Сьома задача =======
*/

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const chunkResult = chunkArray([1, 2, 3, 4, 5], 2);
console.log(chunkResult); 