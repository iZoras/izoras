/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:

  С использованием цикла.
  Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
  С использованием формулы арифметической прогрессии.*/

//рекурсия

function sumTo(n) {
  if (!n) return 0;
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

//Цикл
function sumToFor(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

//Ар прогрессия

function sumToArif(n) {
  return ((1 + n) / 2) * n;
}

const n = 99;

console.log(sumTo(n));
console.log(sumToFor(n));
console.log(sumToArif(n));
