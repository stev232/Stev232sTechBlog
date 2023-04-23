const { User } = require('../models');

const userData = [
  {
    user_name: 'John123',
    email: 'john123@email.com',
    password: 'Password123',
  },
  {
    user_name: 'Ashley432',
    email: 'ashley432@email.com',
    password: 'Password123',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
