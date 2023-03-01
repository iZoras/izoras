/*31st-assigment*/

function findCenter(length) {
  if (length % 2 === 0) {
    return length / 2;
  } else {
    return Math.round(length / 2) - 1;
  }
}


let styles = ["Джаз", "Блюз"];
//console.log(styles);

styles.push("Рок-н-рол")
//console.log(styles);

styles[Math.round(findCenter(styles.length))] = "Классика"
//console.log(styles);

styles.shift();
//console.log(styles);

styles.unshift("Рэп", "Регги");
//console.log(styles);

