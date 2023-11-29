const { User } = require('../models');

const userData = [
  {
    name: 'neyney',
    email: 'drfrankenstein123@gmail.com',
    password: 'pass12345'
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
