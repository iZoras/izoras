/*Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.*/

function groupById(arr) {
  const usersById = {};
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    usersById[user.id] = user;
  }
  return usersById;
}
