const Sequelize = require('sequelize')
const sequelize = require('../db/conexion').sequelize;

module.exports = function(sequelize, DataType){
  const Estudiantes = sequelize.define('estudiantes', {
    nombre: {
      type: Sequelize.STRING
    },
    telefono: {
      type: Sequelize.STRING
    },
    idcurso: {
        type: Sequelize.BIGINT
    },
    fechaingreso: {
        type: Sequelize.DATE, defaultValue:Sequelize.NOW
    }
  });
  return Estudiantes;
}

/*estudiantes.findAll().then(Estudiantes => {
    console.log(Estudiantes)
  })*/
//module.exports.estudiantes = estudiantes
