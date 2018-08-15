module.exports = function(app){
    const cursos = require('../controllers/cursos.controller.js');
    // crear o modificar un registro
    app.post('/api/cursos',cursos.createupdate);

    // mostrar todos o uno
    app.get('/api/cursos/:id',cursos.find);

    // Borrar un registro
    app.delete('/api/cursos/:id', cursos.delete);
}