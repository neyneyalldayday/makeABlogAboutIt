const seedUsers = require('./user-seeds');
const seedArticles = require('./article-seeds');
const seedTrolls = require('./troll-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedArticles();
  console.log('\n----- ARTICLES SEEDED -----\n');

  await seedTrolls();
  console.log('\n----- TROLLS SEEDED -----\n');

  process.exit(0);
};

seedAll();
