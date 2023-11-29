const { Troll } = require('../models');

const trollData = [
  {
    troll_body: 'rock music suxxx',
  },
  {
    troll_body: 'I hate everything about rock music!',
  },
  {
    troll_body: 'rock music is for losers!',
  },
  {
    troll_body: 'listening to rock music is like torture!',
  },
  {
    troll_body: 'rock music should be banned forever!',
  },
  {
    troll_body: 'if you enjoy rock music, you have bad taste!',
  },
  {
    troll_body: 'rock music is so outdated!',
  },
  {
    troll_body: 'people who like rock music are clueless!',
  },
  {
    troll_body: 'rock music fans need a reality check!',
  },
 
];

const seedTrolls = () => Troll.bulkCreate(trollData);

module.exports = seedTrolls;
