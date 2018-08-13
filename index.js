const app = require('express')();
const port = process.env.port || 3000;
//const babel = require('babel-core');
const conexion = require('./db/conexion');

const estudiantes = require('./models/estudiantes');

app.listen(port,() =>{
    console.log('Listo puerto ' + port)
})

conexion.sequelize
.query("SELECT * FROM estudiantes").then(nombre => {
    console.log(nombre)
  })

  

