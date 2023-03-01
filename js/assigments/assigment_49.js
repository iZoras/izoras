/*Хранение отметок "не прочитано"*/

let messages = [
  {id: 1, text: "Hello", from: "John"},
  {id: 2, text: "How goes?", from: "John"},
  {id: 3, text: "See you soon", from: "Alice"}
];

let isRead = {};

function markAsRead(message) {
  isRead[message.id] = true;
}

function isMessageRead(message) {
  return isRead[message.id];
}

markAsRead(messages[0]);
console.log(messages);
console.log(isMessageRead(messages[1]));

function removeMessage(message) {
  delete isRead[message.id];
  messages.splice(messages.indexOf(message), 1);
}
