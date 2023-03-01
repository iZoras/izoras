/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.*/

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  return Math.round((tomorrow - today) / 1000);
}
