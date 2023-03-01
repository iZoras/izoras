/*Хранение времени прочтения*/

let messages = [
  { text: "Hello", from: "John", id: "message-0" },
  { text: "How goes?", from: "John", id: "message-1" },
  { text: "See you soon", from: "Alice", id: "message-2" }
];

let messageReadDates = {};

function markMessageAsRead(message) {
  messageReadDates[message.id] = new Date();
}

function isMessageRead(message) {
  return message.id in messageReadDates;
}

function deleteMessage(message) {
  delete messageReadDates[message.id];
  let index = messages.indexOf(message);
  if (index !== -1) {
    messages.splice(index, 1);
  }
}
