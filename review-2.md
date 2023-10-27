# ¿Qué es mi producto y para que sirve?
Esta nueva version del Servidor Lista de Tareas Express Router tiene una serie de middleware, digamos que es como un tipo de filtro, para gestionar errores y validar solicitudes entrantes de los usuarios. Está diseñado para proporcionar un entorno seguro para la gestión de tareas. Estos middleware se encargan de manejar situaciones de error y garantizar la integridad de las solicitudes.

# ¿Cuáles son las funcionalidades más importantes y porque los usuarios las usarían?
Las funcionalidades más importantes en esta nueva version son:

Middlewares para gestionar errores de solicitudes POST (crear un nueva tarea) y PUT (actualizar una tarea) estan encargados de manejar errores como cuerpos vacíos o datos no válidos.Para cada solicitud hay dos middlewares, uno se enfoca en los cuerpos vacios y el otro para los datos no validos, por lo que son cuatro en total. Esto garantiza que los datos ingresados en la creación o actualización de tareas sean coherentes y completos.

Middleware para validar métodos HTTP estos tiene la funcion de aceptar solicitudes por métodos HTTP válidos, por lo que ayuda a proteger el servidor de solicitudes inapropiadas o maliciosas, lo que aumenta la seguridad del sistema. En otras palabras, este middleware se asegura de que el usuario realice peticiones adecuadas y no dañinas.

Middleware para validar parámetros el cual se encarga de verificar que los parámetros proporcionados sean correctos. Esto asegura que esas solicitudes sean coherentes con las rutas y los parámetros esperados, lo que evita errores y confusiones.

Esta nueva version ofrece un manejo mas preciso y completo de tares gracias a la capacidad de manejar errores de solicitudes POST y PUT. Además, de la seguridad brindada por la validacion de métodos HTTP y la verifcacion de la solciitudes por medio de la validación de parámetros.
