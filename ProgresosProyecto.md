# 🧩 FASE 0 — Preparación del proyecto

En esta fase inicial se ha realizado la configuración y organización básica del proyecto antes de comenzar con el desarrollo de la aplicación.

Se ha utilizado React con TypeScript, ya que permite trabajar de forma más segura y evitar errores, facilitando la comprensión del código durante el desarrollo. Además, esta combinación es adecuada para proyectos educativos, ya que ayuda a entender mejor la estructura de los datos.

Antes de comenzar a programar la funcionalidad, se ha creado una estructura de carpetas organizada, con el objetivo de mantener el proyecto claro y ordenado desde el principio.

La estructura seguida separa cada parte del proyecto según su función:
- La carpeta components se utilizará para los elementos visuales de la aplicación.
- La carpeta hooks se destinará a la lógica y al uso de custom hooks.
- La carpeta api se empleará para centralizar las peticiones a la Rick and Morty API.
- La carpeta types permitirá definir los tipos de datos utilizados en la aplicación.

Esta organización facilita la lectura del código, evita mezclar responsabilidades y permite avanzar en el proyecto de forma progresiva y comprensible.

<br>

# 🧩 FASE 1 — Carga inicial de personajes

En esta fase se ha desarrollado la funcionalidad básica de la aplicación, permitiendo mostrar un listado de personajes al iniciar la app.

Para ello, se ha realizado una petición a la Rick and Morty API utilizando fetch, obteniendo los personajes y almacenándolos en el estado del componente principal. Estos datos se muestran en pantalla mediante componentes independientes, lo que facilita la organización del código.

Además, se han gestionado los distintos estados de la aplicación:
-	un estado de carga, que informa al usuario mientras se obtienen los datos
-	un estado de error, que muestra un mensaje en caso de que la petición falle

De esta forma, la aplicación responde correctamente ante las diferentes situaciones posibles, ofreciendo una experiencia de uso más clara y controlada.

Esta fase establece la base sobre la que se desarrollarán las siguientes funcionalidades del proyecto.

<br>

# 🧩 FASE 2 — Búsqueda de personajes

En esta fase se ha implementado la funcionalidad de búsqueda de personajes por nombre mediante un campo de texto.

Para ello, se ha añadido un input controlado que permite introducir el nombre del personaje, almacenando el valor en el estado de la aplicación. Cada vez que el usuario modifica el contenido del input, se realiza automáticamente una nueva petición a la API, actualizando el listado de personajes mostrados en pantalla.

Además, se ha incorporado el enfoque automático del campo de búsqueda al cargar la vista, utilizando useRef, lo que permite mejorar la experiencia de uso sin provocar renderizados innecesarios.

Durante el desarrollo de esta fase surgió un pequeño desliz, ya que inicialmente la aplicación no actualizaba los personajes mostrados al cambiar la búsqueda. Esto se debía a que no se estaba teniendo en cuenta la variación del valor introducido en el input al realizar la petición. Tras revisar el funcionamiento del estado y las dependencias del efecto, se corrigió el problema, logrando que el listado se actualice correctamente en función del texto introducido.

Esta fase ha permitido comprender mejor la relación entre el estado, los efectos y las llamadas a la API, consolidando el funcionamiento dinámico de la aplicación.