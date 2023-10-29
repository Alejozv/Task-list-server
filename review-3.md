# ¿Qué es mi producto y para que sirve?
En esta nueva version del Servidor de Lista de Tareas con Express contamos con una nueva funcion de autenticación de usuario para garantizar la seguridad de los datos y la privacidad de las cuentas registradas. Además, contamos con API REST que permite que potelciales clientes con otros servicios interactuen de manera eficiente con el servidor de tareas

# ¿Cuáles son las funcionalidades más importantes y porque los usuarios las usarían?
Las funcionalidades más importantes en esta nueva version son:

# API REST

Crear una Nueva Tarea: Nuestro servidor permite a los usuarios crear tareas de forma sencilla. Esto es esencial para 

Actualizar una Tarea: Los usuarios pueden realizar modificaciones en las tareas existentes para actualizar su estado o descripcion.

Eliminar Tareas: Si una tarea ya no es relevante o ha sido completada, se puede eliminar sin complicaciones

Listar Todas las Tareas: Con esta función, los usuarios pueden ver todas sus tareas 

Listar Tareas Completas e Incompletas: Clasificamos las tareas según su estado para que los usuarios puedan identificar rápidamente las tareas pendientes y las completadas. 

Obtener una Tarea Individual: Nuestro servidor permite a los usuarios obtener información detallada sobre una especifica por medio de su id.

# Autenticación de Usuarios

Ruta de Autenticación (Login): Porporciona un porceso de inicio de sesion seguro permitiendole al usario que haga una autenticacion confiable.

Generación de Token (JWT): El servidor crea un token JWT para los usuarios autenticados.Esto es como una llave digital para abrir un candado. Este "candado" protege los datos personales en la aplicación, y el Token JWT es la llave que permite acceder de forma segura a tus datos como usuario . Al igual que solo tú puedes abrir un candado con la llave adecuada, solo tú puedes acceder a tus datos con el Token JWT correcto. 

Validación de Token JWT: La ruta protegida verifica la autenticación mediante la validación del token JWT incluido en el encabezado de autorización de la solicitud. 

Los usuarios usarían estas funcionalidades para organizar sus tareas de manera más eficiente y proteger su información personal. Nuestro servidor brinda una experiencia de usuario más segura y cómoda al tiempo que mejora la productividad y la administración de tareas.