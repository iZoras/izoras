/*Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/

function aclean(arr) {
  const map = new Map();

  for (let word of arr) {
    const sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}
