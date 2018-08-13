//import Sequelize from "sequelize";
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Estudio', 'postgres', 'Granada@4444237123', {
  host: '192.168.0.51',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Coneccion OK');
  })
  .catch(err => {
    console.error('Sin Coneccion:', err);
  });

  module.exports.sequelize = sequelize