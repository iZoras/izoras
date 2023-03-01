/*Сортировать в порядке по убыванию*/

function sortFromTopToBottom(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
}

