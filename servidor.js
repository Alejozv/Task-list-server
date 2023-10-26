//Importar
const express = require ('express');

//Importar data 
const tareas = require('./data.js')

//Definir el puerto
const port = 3000;

//Importo mi router al servidor
const listviewrouter = require ('./list-view-router')
const listeditrouter = require ('./list-edit-router')


//Creamos una instancia de Express
const app = express();

app.use(express.json());


// Vamos a decirle a nuestra servidor cual router va a utilizar

app.use('/tasks',listviewrouter)
app.use('/tasks',listeditrouter)

//Construir las reglas de mi servidor
app.get ('/', (req,res) => {    
    res.json(tareas)
})

//Encender mi servidor
app.listen (port, () => {
    console.log ('servidor corriendo')
})