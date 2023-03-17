/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
1. Используя setInterval.
2. Используя рекурсивный setTimeout.*/

function printNumbersInterval(from, to) {
  let current = from;

  let intervalId = setInterval(function() {
    console.log(current);
    if (current === to) {
      clearInterval(intervalId);
    }
    current++;
  }, 1000);
}




function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function print() {
    console.log(current);
    if (current < to) {
      setTimeout(print, 1000);
    }
    current++;
  }, 1000);
}


