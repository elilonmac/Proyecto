const app = require('express')();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

const db = require('./db/conexion.js');

db.sequelize.sync({force: true}).then(() =>{
    console.log('Borra y crea de nuevo');
})

require('./routes/cursos.route.js')(app);

const port = process.env.port || 3000;
app.listen(port,() =>{
    console.log('Listo puerto ' + port)
})