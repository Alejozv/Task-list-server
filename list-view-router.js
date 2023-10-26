const express = require ('express');

//Importar data 
const tareas = require('./data.js')


//Crear el roouter que va a encapsular las rutas
const router = express.Router();

router.get ('/:completed', (req,res)=>{
    const completed = req.params.completed
    if(completed === 'completed'){
        const response = tareas.filter((tarea)=> tarea.completed === true)
        res.json(response);
    }
    else if (completed === 'incompleted'){
        const response = tareas.filter((tarea)=> tarea.completed === false)
        res.json(response);
    }
    else {
        res.json('Parametro no contemplado')
    }
    
    
})



//Exporto el router para poder utilizarlo en mi servidor
module.exports = router;