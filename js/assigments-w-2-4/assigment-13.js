/*Результатом декоратора debounce(f, ms) должна быть обёртка,
которая передаёт вызов f не более одного раза в ms миллисекунд.
Другими словами, когда мы вызываем debounce, это гарантирует,
что все остальные вызовы будут игнорироваться в течение ms.*/

function debounce(f, ms) {
  let timer = false;

  return function() {
    if (timer) return;
    f.apply(this, arguments);
    timer = true;
    setTimeout(() => timer = false, ms);
  };
}
