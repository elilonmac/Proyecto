const Sequelize = require('sequelize')
const sequelize = require('../db/conexion').sequelize;
module.exports = function(sequelize, DataType){
    const EstudiantesMaterias = sequelize.define('estudiantesmaterias',{
        idestudiante:{
            type:Sequelize.BIGINT
        },
        idmateria:{
            type:Sequelize.BIGINT
        }
    });
    return EstudiantesMaterias;
}