const express = require ('express');
const tareas = require ('./data')
const router = express.Router();

router.post('/created', (req,res)=> {
    //utilizo el metodo request body que envia los datos en el cuerpo de la request
    const description = req.body.description;
    const newtask = {
        id:Date.now(),
        completed:false,
        description:description
    }
    tareas.push(newtask);
    res.json(tareas);

})

router.delete ('/deleted/:id', (req,res) => {
    const id = req.params.id
    const index = tareas.findIndex ((tarea)=>tarea.id == id);

    if ( index !== -1) {
        tareas.splice(index,1);
        res.json(tareas);
    } else {
        res.send('Tarea no encontrada');
    }
})

router.put('/updated/:id', (req,res) => {
    const id = req.params.id
    const updateobject = req.body
    const index = tareas.findIndex((tarea)=>tarea.id == id);

    if (index !== -1) {
        tareas[index] = updateobject;        
        res.json(tareas);
    }
    else {
        res.send('Tarea no encontrada');
    }


})

module.exports = router;