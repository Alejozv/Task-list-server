//Importar
const express = require ('express');

//Importo jsonwebtoken y dotenv
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv');

dotenv.config();

//Definir Llave secreta
const SECRET_KEY = process.env.SECRET_KEY;

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

//Definimos un array de usuarios dentro de mi servidor

const users = [
    {username:"user123", password:"Holamundo345", rol:"admin"},
    {username: "user213", password: "Nuevomundo78",rol:"user"},
    {username: "user321", password: "Nieve56",rol:"user"}
];

// Autenticación
app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const payload = {
            rol: user.rol
        };

        const token =jwt.sign(payload, SECRET_KEY)
        res.json({
            message: 'Autenticacion exitosa',
            token: token
        })

    }
    else {
        res.status(401).send('Este usuario o contraseña son invalidos')
    }
   
})

//Creamos una ruta para que haga la validacion del token

function validToken (req,res,next) {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send('Token no valido')
    }
    try {
        const tokenDecrypted = jwt.verify(token,SECRET_KEY)
        req.data = tokenDecrypted;
        next()
    }
    catch(error){
        res.status(401).send('No autorizado: debes proveer un token valido')
    }
}

app.get('/protect-route', validToken, (req, res) => {
    res.json({ message: 'Ruta protegida accesible' });
  });

// Vamos a decirle a nuestra servidor cual router va a utilizara
app.use('viewTask',listviewrouter)
app.use('editTask',listeditrouter)

//Creamos un API REST

//Crear una nueva Tarea
app.post('/api/task/created',(req,res)=> {
    const description = req.body.description;
    const newtask = {
        id:Date.now(),
        completed:false,
        description:description
    }
    tareas.push(newtask);
    res.json(tareas);

})

//Actualizar tarea
app.put('/api/task/updated/:id',(req,res) => {
    const id = req.params.id
    const findTask = tareas.find((tarea)=> tarea.id == id);
    if (findTask) {
        const updatedTask = req.body;
        findTask.completed = updatedTask.completed;
        findTask.description = updatedTask.description;
        res.json(findTask);
    }
    else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
})

//Eliminar Tarea
app.delete('/api/task/deleted/:id',(req,res) => {
    const id = req.params.id
    const deletedTask = tareas.findIndex((tarea)=> tarea.id == id)
    if (deletedTask != -1) {
        tareas.splice(deletedTask,1);
        res.json(tareas);
    } else {
        res.send('Tarea no encontrada');
    }
    })

//Listar tareas
app.get('/api/task/allTasks', (req,res) => {
    res.json(tareas)
})

//Listar las tareas completas 
app.get('/api/task/completed',(req,res) => {
    const completedTasks = tareas.filter((tarea) => tarea.completed === true);
  res.json(completedTasks);
});


//Listar las tareas incompletas
app.get('/api/task/incompleted',(req,res) => {
    const incompletedTasks = tareas.filter((tarea) => tarea.completed === false);
    res.json(incompletedTasks);
})

//Obetener una solo una tarea
app.get('/api/task/select/:id',(req,res) => {
    const id = req.params.id;

  const selectTask = tareas.find((tarea) => tarea.id == id);

  if (selectTask) {
    res.json(selectTask);
  } else {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }
})
   
//Construir las reglas de mi servidor
app.get ('/', (req,res) => {    
    res.json('Bienvenido a tu lista de tareas')
})

//Encender mi servidor
app.listen (port, () => {
    console.log ('servidor corriendo')
})


