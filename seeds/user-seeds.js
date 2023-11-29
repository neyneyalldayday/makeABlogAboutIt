const { User } = require('../models');

const userData = [
  {
    name: 'neyney',
    email: 'drfrankenstein123@gmail.com',
    password: 'pass12345'
  },
  {
    name: 'btown',
    email: 'brittanyNdrum@gmail.com',
    password: 'pass12345'
  },
  {
    name: 'bean',
    email: 'badbean@gmail.com',
    password: 'pass12345'
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
