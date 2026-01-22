# React: práctica propuesta

Desarrolla una aplicación en **React** que permita explorar personajes de la serie *Rick and Morty* consumiendo la **Rick and Morty API**, aplicando correctamente los hooks de React, la creación de **custom hooks** y la implementación de **pruebas automáticas**.

🔗 **API a utilizar (obligatoria):**

https://rickandmortyapi.com/documentation

---

## Descripción de la Aplicación

La aplicación deberá permitir al usuario:

- Visualizar un listado de personajes
- Buscar personajes por nombre
- Filtrar personajes por estado (Alive, Dead, Unknown)
- Ver el detalle de un personaje seleccionado

La interfaz debe responder correctamente a las acciones del usuario y manejar los distintos estados de la aplicación.

---

## Requisitos Funcionales y Técnicos

### 1️⃣ Carga inicial de datos

- Al iniciar la aplicación se debe mostrar un listado de personajes obtenido desde la API.
- Mientras se cargan los datos, se debe mostrar un indicador visual.
- En caso de error, se debe mostrar un mensaje adecuado al usuario.

---

### 2️⃣ Búsqueda de personajes

- La aplicación debe incluir un campo de texto para buscar personajes por nombre.
- La búsqueda debe ejecutarse al cambiar el valor del input.

---

### 3️⃣ Filtros por estado

- Se debe permitir filtrar personajes por su estado (`Alive`, `Dead`, `Unknown`).
- Al modificar el filtro, el listado debe actualizarse automáticamente.

---

### 4️⃣ Enfoque automático del input

- Al cargar la vista principal, el campo de búsqueda debe recibir foco automáticamente.
- No se debe provocar un re-render innecesario al hacerlo.

---

### 5️⃣ Selección de personaje

- Al hacer clic en un personaje del listado, se deben mostrar sus datos detallados.
- El personaje seleccionado debe permanecer visible aunque se modifique la búsqueda o el filtro.

---

### 6️⃣ Custom Hook

- La lógica relacionada con la obtención de datos desde la API debe estar encapsulada en **custom hooks**.
- Estos hook debe:
    - Manejar estados de carga y error
    - Permitir reutilización
    - Ser independientes de la interfaz

---

### 7️⃣ Persistencia de valores

- Se debe mantener un valor persistente que:
    - No dispare re-render
    - Permita recordar información entre renders
        
        (por ejemplo, última búsqueda realizada o cantidad de peticiones)
        

---

### 8️⃣

### Scroll infinito o paginación

**Descripción**

- Cargar más personajes al llegar al final del listado **o** mediante un botón “Cargar más”.

**Obliga a decidir**

- Cómo acumular datos sin perder los anteriores
- Cuándo disparar nuevas peticiones
- Cómo evitar múltiples llamadas innecesarias

### 9️⃣

### **Pruebas**

- Implementar pruebas utilizando Vitest.