var faker = require('faker');
var fs = require('fs');

var database = {
  events: [],
  categories: [],
  wishlist: []
};

var users = {
  users: []
}

var quantityEvent = 10;

for (var i = 1; i <= quantityEvent; i++) {
  database.events.push({
    id: i,
    name: faker.random.words(),
    image: faker.image.technics(),
    date: faker.date.between('2015-01-01', '2015-12-31'),
    city: faker.address.city(),
    location: {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude()
    },
    desc: faker.lorem.text(),
    categoryId: faker.random.number({ min: 1, max: 10 }),
    price: faker.random.number({ min: 250, max: 1000 })
  });
}
for (var i = 1; i <= 10; i++) {
  database.categories.push({
    id: i,
    name: faker.name.jobType(),
  });
}
for (var i = 1; i <= 10; i++) {
  database.wishlist.push({
    id: i,
    eventId: faker.random.number({ min: 1, max: quantityEvent }),
  });
}

for (var i = 1; i <= 10; i++) {
  users.users.push({
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.email()
  });
}

fs.writeFile('db.json', JSON.stringify(database), (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.writeFile('users.json', JSON.stringify(users), (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});