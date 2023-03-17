/*Добавить функциям метод "f.defer(ms)"

Добавьте всем функциям в прототип метод defer(ms),
который вызывает функции через ms миллисекунд.*/

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};


function foo() {
  console.log("Hello");
}

foo.defer(1000); // вызовется через 1 секунду
