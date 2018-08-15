module.exports = (sequelize,Sequelize)=>{
    const Cursos = sequelize.define('cursos',{
        nombre:{
            type:Sequelize.STRING(100), allowNull:false
        }
    });
    return Cursos;
}