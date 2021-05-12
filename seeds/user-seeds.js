const { User } = require('../models');

const userData = [
  {
    username: 'blahblah',
    password: 'test1'
    
  },
  {
    username: 'useruseruser',
    password: 'test2'
  },
  {
    username: 'checktestcheck',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;