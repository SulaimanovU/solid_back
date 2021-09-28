const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://keiz:keiz123@34.133.40.93:3306/solid_back');

module.exports = sequelize;




// gcloud sql connect mysql-1 --user=root