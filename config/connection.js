const Sequelize = require('sequelize');
const PORT = process.env.PORT || 3306;

require('dotenv').config();


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: PORT
  });
}


module.exports = sequelize;
