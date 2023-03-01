/*Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:*/

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  if (key == 'occupiedBy' && value == meetup) {
    return undefined;
  }
  return value;
}));
