const uuid = require('uuid');
const faker = require('faker');
const moment = require('moment');

const posts = [
  {
    id: 1,
    author_id: uuid.v4(),
    title: `${faker.lorem.word()} ${faker.lorem.word()}`,
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    image: faker.image.image(),
    created: moment().valueOf(),
  },

  {
    id: 2,
    author_id: uuid.v4(),
    title: `${faker.lorem.word()} ${faker.lorem.word()}`,
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    image: faker.image.image(),
    created: moment().valueOf(),
  },

  {
    id: 3,
    author_id: uuid.v4(),
    title: `${faker.lorem.word()} ${faker.lorem.word()}`,
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    image: faker.image.image(),
    created: moment().valueOf(),
  },

  {
    id: 4,
    author_id: uuid.v4(),
    title: `${faker.lorem.word()} ${faker.lorem.word()}`,
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    image: faker.image.image(),
    created: moment().valueOf(),
  },

  {
    id: 5,
    author_id: uuid.v4(),
    title: `${faker.lorem.word()} ${faker.lorem.word()}`,
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    image: faker.image.image(),
    created: moment().valueOf(),
  },
];


module.exports = posts;