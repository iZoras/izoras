/*Сумма введённых чисел*/

function arraySum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

function sumInput() {
  let arr = [];

  let promptValue;

  while (1) {
    promptValue = prompt("Введите число", 0);
    if (promptValue === null || promptValue === '') {
      break;
    } else if (isFinite(promptValue)) {
      arr.push(+promptValue);
    }
  }

  arraySum(arr);
  alert(sum);
}
