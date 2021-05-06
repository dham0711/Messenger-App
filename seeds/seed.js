const sequelize = require('../config/connection');
const { User } = require('../models');

const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await user.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of users) {
    const newUser = await user.create({
      reader_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();