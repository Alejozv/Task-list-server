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

//Creamos un middleware para que solo gestiones solicitudes de metodos HTTP
function rutas (req,res,next) {
    const methods = ['GET','POST','PUT','DELETE'];
    if (!methods.includes(req.method)) {
        return res.status(400).json({mensaje:'Ingresa un metodo HTTP'})
    }
    next();
}

app.use(rutas);


// Vamos a decirle a nuestra servidor cual router va a utilizar

app.use('/tasks',listviewrouter)
app.use('/editTasks',listeditrouter)

//Construir las reglas de mi servidor
app.get ('/', (req,res) => {    
    res.json(tareas)
})

//Encender mi servidor
app.listen (port, () => {
    console.log ('servidor corriendo')
})


