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

<br>

# 🧩 FASE 3 — Filtro de personajes por estado

En esta fase se ha incorporado un sistema de filtrado que permite seleccionar los personajes según su estado: Alive, Dead o Unknown.

Para ello, se ha añadido un selector que guarda la opción elegida en el estado de la aplicación. Cada vez que el usuario modifica el filtro, se realiza automáticamente una nueva petición a la API, actualizando el listado de personajes mostrados en pantalla.

Esta funcionalidad se ha integrado junto con la búsqueda por nombre, permitiendo combinar ambos criterios de forma simultánea. De esta manera, el usuario puede refinar los resultados según sus intereses.

Con esta fase se refuerza el uso del estado y de los efectos en React, comprendiendo cómo distintos valores pueden influir en una misma petición y provocar la actualización dinámica de la interfaz.

<br>

# 🧩 FASE 4 — Selección de personaje y vista de detalle

En esta fase se ha añadido la funcionalidad de selección de personajes, permitiendo al usuario hacer clic sobre una tarjeta para visualizar su información detallada.

Al seleccionar un personaje, sus datos se muestran en un panel de detalle independiente del listado principal, donde se presenta información más completa como el estado, la especie, el género, el origen y la ubicación actual.

El personaje seleccionado se guarda en un estado propio, lo que permite que su información permanezca visible aunque se modifique la búsqueda o el filtro aplicado. De este modo, el detalle no depende del listado mostrado en cada momento, evitando que desaparezca al actualizar los resultados.

Con esta fase se mejora la experiencia de usuario y se afianza la comprensión del manejo del estado en React, diferenciando entre los datos que cambian dinámicamente y aquellos que deben mantenerse estables.

<br>

# 🧩 FASE 5 — Paginación y carga de más personajes

En esta fase se ha incorporado un sistema de paginación que permite cargar más personajes de forma progresiva mediante un botón “Cargar más”.

Para ello, se ha gestionado el número de página y se ha controlado si existen más resultados disponibles, evitando realizar peticiones innecesarias. Al pulsar el botón, se solicita la siguiente página a la API y los nuevos personajes se añaden al listado existente sin eliminar los anteriores.

Además, cuando se modifica la búsqueda o el filtro, la paginación se reinicia correctamente, mostrando de nuevo los resultados desde la primera página.

Con esta fase se mejora la experiencia de usuario, permitiendo explorar el contenido de forma gradual y reforzando la comprensión del manejo del estado y la acumulación de datos en React.

<br>

# 🧩 FASE 6 — Creación de un custom hook

En esta fase se ha reorganizado la lógica de la aplicación mediante la creación de un custom hook, con el objetivo de separar la obtención de datos de la interfaz.

Toda la lógica relacionada con las peticiones a la Rick and Morty API, la gestión del estado de carga, los errores y la paginación se ha trasladado al hook useCharacters. De esta forma, el componente principal deja de encargarse de estas tareas y se centra únicamente en la presentación de la información.

Esta separación permite que el código sea más claro, reutilizable y fácil de mantener, además de favorecer una mejor comprensión del funcionamiento de los hooks en React.

Con esta fase se consolida el uso de los custom hooks como una herramienta clave para organizar la lógica de la aplicación de manera ordenada y eficiente.

<br>

# 🧩 FASE 7 — Persistencia de valores con useRef

En esta fase se ha trabajado la persistencia de valores utilizando el hook useRef.

Para ello, se ha empleado un valor que permite contar el número de peticiones realizadas a la API. Este dato se mantiene entre renderizados, pero no provoca una nueva renderización de la interfaz cuando cambia.

De esta forma se comprende la diferencia entre useState, que actualiza la vista, y useRef, que permite almacenar información interna sin afectar al rendimiento de la aplicación.

Esta fase permite afianzar el uso de useRef como una herramienta útil para conservar datos persistentes dentro del ciclo de vida del componente.

<br>

# 🧩 FASE 8 — Pruebas con Vitest

En esta fase se han incorporado pruebas automáticas con el objetivo de comprobar que las principales funcionalidades de la aplicación funcionan correctamente.

Se han realizado pruebas relacionadas con:
- la carga inicial de personajes
- la búsqueda por nombre
- el filtrado por estado
- la selección de un personaje y la visualización de su detalle

Estas pruebas permiten verificar que la aplicación responde adecuadamente a las acciones del usuario y que los cambios en la interfaz se producen de forma correcta.

La prueba que ha resultado más compleja ha sido la relacionada con la visualización del detalle del personaje, ya que fue necesario comprender cómo esperar a que la información aparezca en pantalla antes de comprobarla. En este punto fue necesario aprender a utilizar correctamente los métodos de espera, ya que los datos no se muestran de forma inmediata.

Gracias a esta fase se ha podido entender mejor la importancia de las pruebas automáticas y cómo ayudan a asegurar el correcto funcionamiento de la aplicación a lo largo del desarrollo.

<br>

# Conclusión Final
Este proyecto me ha resultado muy interesante, porque demuestra de forma clara cómo, con una estructura sencilla, se pueden realizar múltiples peticiones, organizar los resultados mediante filtros y comprobar funcionalidades de manera rápida. Además, las pruebas automáticas permiten identificar con precisión qué parte falla, lo que facilita la depuración y el aprendizaje durante el desarrollo.
