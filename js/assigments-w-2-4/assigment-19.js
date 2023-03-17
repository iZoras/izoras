/*Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(),
который должен возвращать список ключей,
разделённых запятой. Ваш toString не должен
 выводиться при итерации объекта с помощью цикла for..in.*/

let dictionary = Object.create(null);

dictionary.toString = function() {
  return Object.keys(this).join(',');
};
