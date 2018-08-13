const Sequelize = require('sequelize');
const conexion = require('../db/conexion');

const estudiantes = conexion.sequelize.define('estudiantes', {
    nombre: {
      type: Sequelize.CHAR
    }
    /*,
    telefono: {
      type: Sequelize.CHAR
    },
    idcurso: {
        type: Sequelize.INTEGER
    },
    fechaingreso: {
        type: Sequelize.DATE
    }*/
  });

/*estudiantes.findAll().then(estudiantes => {
    console.log(estudiantes)
  })*/
//module.exports.estudiantes = estudiantes
