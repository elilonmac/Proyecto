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

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.cursos = require('../models/cursos.model.js')(sequelize,Sequelize);
db.materias = require('../models/materias.model.js')(sequelize,Sequelize);
db.estudiantes = require('../models/estudiantes.model.js')(sequelize,Sequelize);
db.estudiantes.belongsTo(db.cursos);
//db.estudiantesmaterias = require('../models/estudiantesmaterias.model.js')(sequelize,Sequelize);
//db.estudiantes.hasMany(db.estudiantesmaterias);
///db.materias.hasMany(db.estudiantesmaterias);
db.estudiantes.belongsToMany(db.materias, {through:'estudiantesmaterias'});
db.materias.belongsToMany(db.estudiantes,{through:'estudiantesmaterias'});
module.exports = db;