const db = require('../db/conexion.js');
const Cursos = db.cursos;

// Crear Curso
exports.createupdate = (req, res) =>{
    if (req.body.id==0){
        Cursos.create(req.body).then(cursos => {
            res.json(cursos);
        }).catch(err =>{
            console.log(err);
            res.status(400).json({msg: "error", details:err});
        })
    }else{
    // Modificar Curso
        const id = req.body.id;
        Cursos.update(req.body,
            {where: {id:id}}).then(() => {
            res.status(200).json({mgs: "Actualizado Curso " + id});
        }).catch(err =>{
            console.log(err);
            res.status(400).json({msg: "error", details:err});
        })
    }
};

// Buscar todos o uno
exports.find = (req,res) =>{
    if (req.params.id == 0){
        Cursos.findAll().then(cursos =>{
            res.json(cursos)
        }).catch(err =>{
            console.log(err);
            res.status(400).json({msg: "error", details:err})
        })
    }else{
        Cursos.findById(req.params.id).then(cursos =>{
            res.json(cursos)
        }).catch(err =>{
            console.log(err);
            res.status(400).json({msg: "error", details:err})
        })
    }
};

exports.delete = (req, res) =>{
    const id = req.params.id;
    Cursos.destroy(
        {where: {id:id}}).then(() => {
        res.status(200).json({mgs: "Eliminado  Curso " + id});
    }).catch(err =>{
        console.log(err);
        res.status(400).json({msg: "error", details:err});
    })
};