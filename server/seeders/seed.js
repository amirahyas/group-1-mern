const db = require('../config/connection');
const { Pet } = require('../models');
const petSeeds = require('./petSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Pet', 'pets')
    await Pet.create(petSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
