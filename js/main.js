/*first-assigment*/
function displayAlert() {
  alert("Я JavaScript!");
}

let clickableElement = document.getElementById("alert-clickable");
clickableElement.addEventListener("click", displayAlert);

/*second-assigment*/

function newDisplayAlert() {
  let name = "Джон";
  admin = name;
  alert(admin);
}

let newClickableElement = document.getElementById("admin");
newClickableElement.addEventListener("click", newDisplayAlert);

/*3rd-assigment*/

/*1. Создайте переменную для названия нашей планеты. Как бы вы её назвали?
  2. Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?*/

let theEarth = "Земля";
let currentUserName = "Джон";

/*5th-assigment*/

const promptName = () => {
  let theName = prompt("Введите имя");
  alert(theName);
}

let promptAlert = document.getElementById("prompt");
promptAlert.addEventListener("click", promptName)

/*6th-assigment*/
/*Исправить промпты, чтобы была сума чисел а не строк*/

const sumOf = () => {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);

  alert(+a + +b);
}

/*7th-assigment*/
const whyJS = () => {
  let question = prompt('Какое "оффициальное" название JavaScript');
  if (question === "ECMAScript") {
    alert("Верно!");
  } else {
    alert('Не знаете,\n"ECMAScript"');
  }
}

let whyJSButton = document.getElementById("whyJS");
whyJSButton.addEventListener("click", whyJS);

/*8th-assigment*/

const whichSigh = () => {
  let number = +prompt('Введите число');
  if (number > 0) {
    alert(1);
  } else if (number < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

let whichSighButton = document.getElementById("whichSigh");
whichSighButton.addEventListener("click", whichSigh);


/*9th-assigment*/

const ageCheck = () => {
  let age = +prompt('Введите возраст', '0');
  if (age === 0) {
    alert("Введите ваш возраст");
    ageCheck();
  } else if (age >= 14 && age <= 90) {
    alert('Добро пожаловать!');
  } else {
    alert('Иди отсюда');
  }
}

const ageCheckWithEM = () => {
  let age = +prompt('Введите возраст', '0');
  if (age === 0) {
    alert("Введите ваш возраст");
    ageCheck();
  } else if (!(age >= 14 && age <= 90)) {
    alert('Иди отсюда');

  } else {
    alert('Добро пожаловать!');
  }
}

let ageCheckButton = document.getElementById("ageCheck");
ageCheckButton.addEventListener("click", ageCheck);
let ageCheckWithEMButton = document.getElementById("ageCheckWithEM");
ageCheckWithEMButton.addEventListener("click", ageCheckWithEM);

/*10th-assigment*/

const passCheck = () => {
  let pass = prompt('Введите пароль');
  if (pass === null) {
    alert("Отменено");
  } else if (pass === '1234') {
    alert('Добро пожаловать!');
  } else {
    alert('Неверный пароль');
    passCheck();
  }
}
const login = () => {
  let username = prompt('Кто там?');

  if (username === null) {
    alert('Отменено');
  } else if (username === 'Админ') {
    passCheck();
  } else {
    alert('Неправильный логин');
    login();
  }
}

let loginButton = document.getElementById("login");
loginButton.addEventListener("click", login);

/* 11th-assigment*/

const allEvenNumbersIn = () => {
  let number = 10;
  let arr = [];

  for (let i = 1; i < number; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  alert(arr);
}
let allEvenNumbersInButton = document.getElementById("allEvenNumbersIn");
allEvenNumbersInButton.addEventListener("click", allEvenNumbersIn);


/*12th-assigment*/

const ifMoreThan100 = () => {
  let number = +prompt('Введите число больше 100');
  if (number < 100) {
    while (number < 100) {
      number = +prompt('Введите число больше 100!');
    }
  } else {
    alert(number);
  }
}

let ifMoreThan100Button = document.getElementById("ifMoreThan100");
ifMoreThan100Button.addEventListener("click", ifMoreThan100);


/*13th-assigment*/

const getPrimes = () => {
  let n = +prompt('Введите число');
  if (!n) {
    alert('Отмена')
  } else if (n < 2) {
    alert("Что с Вами не так? \nнаписано же от 2 до n")
  } else {
    const isPrime = new Array(Math.floor(n / 2) + 1).fill(true);

    isPrime[0] = false;

    const primes = [2];
    for (let i = 3; i <= n; i += 2) {
      if (isPrime[Math.floor(i / 2)]) {
        primes.push(i);
        for (let j = i * i; j <= n; j += 2 * i) {
          isPrime[Math.floor(j / 2)] = false;
        }
      }
    }
    alert(primes);
  }
}
let getPrimesButton = document.getElementById("getPrimes");
getPrimesButton.addEventListener("click", getPrimes);


/*14th-assigment*/
/*Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.*/

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/

function checkAge(age) {
  return ((age > 18) ? true : confirm('Родители разрешили?'));
}

function checkAge_(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

/*15th-assigment*/

function min(a, b) {
  return (a < b) ? a : b;
}

const minOf = () => {
  let a = +prompt('Введите первое число');
  let b = +prompt('Введите второе число');

  alert(min(a, b));
}

let minButton = document.getElementById("min");
minButton.addEventListener("click", minOf);

/*16th-assigment*/

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;
  return result;
}


const powOf = () => {
  let x = +prompt('Введите первое число');
  let n = +prompt('Введите второе число');

  if (!n) {
    alert('Отменено');
  } else if (isNaN(n)) {
    alert('Неверное число');
  } else if (n < 0) {
    alert('Неверное число');
  } else if (n === 0) {
    alert('Неверное число');
  } else {
    alert(pow(x, n));
  }
}

let powButton = document.getElementById("pow");
powButton.addEventListener("click", powOf);

/*17t-assigment*/

const user = {};
const addPropToObj = (obj) => {
  let objProp = prompt('Введите название свойства');
  let objPropValue = prompt('Введите значение');

  obj[objProp] = objPropValue;
}

let addPropToObjButton = document.getElementById("addProp");
addPropToObjButton.addEventListener("click", function () {
  addPropToObj(user)
});

const changePropValue = (obj) => {
  let objProp = prompt('Введите название свойства которое нужно изменить');
  let objPropValue = prompt('Введите значение');
  obj[objProp] = objPropValue;
}

let changePropValueButton = document.getElementById("changeProp");
changePropValueButton.addEventListener("click", function () {
  changePropValue(user)
});

const removePropFromObj = (obj) => {
  let objProp = prompt('Введите название свойства которое нужно удалить');
  delete obj[objProp];
}

let removePropFromObjButton = document.getElementById("deleteProp");
removePropFromObjButton.addEventListener("click", function () {
  removePropFromObj(user)
});

const showObject = (obj) => {
  let objProps = "";
  for (let key in obj) {
    objProps += key + ' : ' + obj[key] + "\n";
  }
  alert(objProps);
};


let showObjectButton = document.getElementById("showObj");
showObjectButton.addEventListener("click", function () {
  showObject(user)
});


/*18t-assigment*/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const human = {
  name: "Джон",
  age: 18,
  gender: "Мужской"
};

const dog = {};

let isEmptyButtonOne = document.getElementById("isEmpty");
isEmptyButtonOne.addEventListener("click", function () {
  alert(isEmpty(human))
});

let isEmptyButtonTwo = document.getElementById("isEmptyToo");
isEmptyButtonTwo.addEventListener("click", function () {
  alert(isEmpty(dog))
});


/*19t-assigment*/
