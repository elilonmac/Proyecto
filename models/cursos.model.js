module.exports = (sequelize,Sequelize)=>{
    const Cursos = sequelize.define('cursos',{
        nombre:{
            type:Sequelize.STRING
        }
    });
    return Cursos;
}