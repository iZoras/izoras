/*41st-assigment*/

const users = [
  { id: 1, name: "John", surname: "Doe" },
  { id: 2, name: "Jane", surname: "Doe" },
  { id: 3, name: "Bob", surname: "Smith" },
];

const usersWithFullName = users.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`,
}));
