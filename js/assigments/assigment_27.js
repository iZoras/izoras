/*27th-assigment*/

const capitalizeString = () => {
  let string = prompt("Введите строку", "");
  if (string === null || string === '') {
    alert(null);
  } else {
    alert(string.charAt(0).toUpperCase() + string.slice(1));
  }
}
