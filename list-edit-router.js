const express = require ('express');
const tareas = require ('./data')
const router = express.Router();

function cuerpovacio (req,res,next) {
    //            true       && true
    if(req.method === 'POST' && Object.keys(req.body).length === 0){
        return res.status(400).json({mensaje:'El cuerpo de la solicitud esta vacio'})
    }
    next();
};



function infonovalida (req,res,next) {
    if (req.method === 'POST' && req.body.description === ""){
        return res.status(400).json({mensaje:'Ingresa una descripcion valida'})
    }
    next();
}


function emptybody (req,res,next) {
    if (req.method === 'PUT' && !req.body.description) {
        return res.status(400).json({mensaje:'La descripcion esta vacía, ingresa un valor'})
    }
    next();
}


function validinfo (req,res,next) {
        if (req.method === 'PUT' && typeof (req.body.description !== 'string') ) {
            return res.status(400).json({mensaje:'El Tipo de dato de la descripcion es invalido'})
        }
        next();
    }
    



router.use(cuerpovacio);
router.use(infonovalida);
router.use(emptybody);
router.use(validinfo);



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