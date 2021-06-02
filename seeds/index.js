  
const seedQuestions = require('./questions-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedQuestions();
  console.log('--------------');

};

seedAll();