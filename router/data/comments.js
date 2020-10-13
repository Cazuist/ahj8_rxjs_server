const uuid = require('uuid');
const faker = require('faker');
const moment = require('moment');

const comments = [
  {
    post_id: 1,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 1,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 2,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 2,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 3,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 3,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 4,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 4,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 5,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },

  {
    post_id: 5,
    id: uuid.v4(),
    author_id: uuid.v4(),
    content: faker.lorem.words(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    created: moment().valueOf(),
  },
  
];


module.exports = comments;