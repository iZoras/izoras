/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.*/

function getAverageAge(users) {
  const sum = users.reduce((acc, user) => acc + user.age, 0);
  const average = sum / users.length;
  return average;
}
