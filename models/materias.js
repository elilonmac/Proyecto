const Sequelize = require('sequelize')
const sequelize = require('../db/conexion').sequelize;
module.exports = function(sequelize, DataType){
    const Materias = sequelize.define('materias',{
        nombre:{
            type:Sequelize.STRING
        }
    });
    return Materias;
}
