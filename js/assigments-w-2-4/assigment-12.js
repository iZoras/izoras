/*Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.*/


function delay(f, ms) {
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// создаём новую функцию с задержкой 3000 мс
let sayHiWithDelay = delay(sayHi, 3000);

sayHiWithDelay("John"); // через 3 секунды выведет "Hello, John!"

