/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/

function sortByAge(users) {
  users.sort(function (a, b) {
    return a.age - b.age;
  });
  return users;
}

