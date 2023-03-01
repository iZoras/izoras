/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.*/

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - today) / 1000);
}
