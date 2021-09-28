const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:keiz123@34.66.211.43:3306/solid_back');

module.exports = sequelize;




// gcloud sql connect mysql-1 --user=root