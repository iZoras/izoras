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

const salarySum = (obj) => {
  let sum = 0;
  if (isEmpty(obj)) {
    alert("Сумма зарплат = " + sum);
    return;
  }
  for (let key in obj) {
    sum += +obj[key];
  }
  alert("Сумма зарплат = " + sum);
}

let salarySumButton = document.getElementById("salarySum");
salarySumButton.addEventListener("click", function () {
  salarySum(user)
});


/*20t-assigment*/

const prodOfNumeric = (obj) => {
  if (isEmpty(obj)) {
    alert("Объект пуст");
    return;
  }

  let numericProd = 1;

  for (let key in obj) {
    if (typeof (obj[key]) === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let showMenuObjButton = document.getElementById("showMenu");
showMenuObjButton.addEventListener("click", function () {
  showObject(menu);
})


let prodOfNumericButton = document.getElementById("prodOfNumeric");
prodOfNumericButton.addEventListener("click", function () {
  prodOfNumeric(menu);
  if (!isEmpty(menu)) {
    showObject(menu);
  }
});


/*21st-assigment*/

let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = prompt('Введите число a');
    this.b = prompt('Введите число b');
  },
  sum() {
    return +this.a + +this.b;
  },
  mul() {
    return +this.a * +this.b;
  },
}

let readButton = document.getElementById("read");
let sumContainer = document.getElementById("sum");
let mulContainer = document.getElementById("mul");
readButton.addEventListener("click", function () {
  calculator.read();
  sumContainer.innerHTML = calculator.sum();
  mulContainer.innerHTML = calculator.mul();
});


/*22nd-assigment*/


function CalculatorConstructor() {
  this.a = 0;
  this.b = 0;

  this.read = function () {
    this.a = prompt('Введите число a');
    this.b = prompt('Введите число b');
  }
  this.sum = function () {
    return +this.a + +this.b;
  }
  this.mul = function () {
    return +this.a * +this.b;
  }
}

let addCalcButton = document.getElementById("newCalculator");
addCalcButton.addEventListener("click", function () {
  let newCalculator = new CalculatorConstructor();
  let btnID = `${Math.random()}`;
  let newP_1_ID = `${Math.random()}`;
  let newP_2_ID = `${Math.random()}`;
  let newP_3_ID = `${Math.random()}`;
  let newP_4_ID = `${Math.random()}`;

  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "newCalculator");

  let newButton = document.createElement("button");
  newButton.setAttribute("id", btnID);
  newButton.textContent = "Посчитать";

  let newP_1 = document.createElement("p");
  newP_1.setAttribute("id", newP_1_ID);
  newP_1.textContent = "a = " + newCalculator.a;

  let newP_2 = document.createElement("p");
  newP_2.setAttribute("id", newP_2_ID);
  newP_2.textContent = "b = " + newCalculator.b;

  let newP_3 = document.createElement("p");
  newP_3.setAttribute("id", newP_3_ID);
  newP_3.textContent = "sum() = " + newCalculator.sum();

  let newP_4 = document.createElement("p");
  newP_4.setAttribute("id", newP_4_ID);
  newP_4.textContent = "mul() =" + newCalculator.mul();

  let parentDiv = document.getElementById("parentDiv");
  let newCalc = parentDiv.appendChild(newDiv);
  newCalc.appendChild(newButton);
  newCalc.appendChild(newP_1);
  newCalc.appendChild(newP_2);
  newCalc.appendChild(newP_3);
  newCalc.appendChild(newP_4);

  let calcBtn = document.getElementById(btnID);
  calcBtn.addEventListener("click", function () {
    newCalculator.read();
    newP_1.textContent = "a = " + newCalculator.a;
    newP_2.textContent = "b = " + newCalculator.b;
    newP_3.textContent = "sum() = " + newCalculator.sum();
    newP_4.textContent = "mul() =" + newCalculator.mul();
  })
})

/*23rd-assigment*/

const sum = () => {
  let a = +prompt("Введите a число", "");
  let b = +prompt("Введите b число", "")
  alert(a + b);
}

let sumButton = document.getElementById("sumOf");
sumButton.addEventListener("click", sum);


/*24th-assigment*/

const readNumber = () => {
  let number = prompt("Введите число", 0);
  if (number === null || number === '') {
    return null;
  } else if (!isFinite(number)) {
    readNumber();
  } else {
    return +number;
  }

}

let readNumberButton = document.getElementById("readNumber");
readNumberButton.addEventListener("click", readNumber);
