/*Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.*/

//Используя цикл:
function printList(list) {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}


//Через рекурсию:
function printListDP(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
