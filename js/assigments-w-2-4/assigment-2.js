/*Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.*/

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(10));
