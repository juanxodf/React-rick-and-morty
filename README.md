# Rick and Morty Explorer (React + TypeScript)

Aplicación web desarrollada con **React + TypeScript** que permite explorar personajes de la serie **Rick and Morty** consumiendo la **Rick and Morty API**.

Incluye:
- Listado de personajes (carga inicial desde la API)
- Búsqueda por nombre (se actualiza al escribir)
- Filtro por estado (Alive / Dead / Unknown)
- Selección de personaje y vista de detalle (se mantiene aunque cambie la búsqueda o el filtro)
- Paginación con botón **“Cargar más”**
- Lógica de obtención de datos en un **custom hook**
- Pruebas automáticas con **Vitest**

---

## API utilizada

- Documentación: https://rickandmortyapi.com/documentation
- Endpoint principal: https://rickandmortyapi.com/api/character

---

## Tecnologías

- React
- TypeScript
- Vite
- Vitest
- Testing Library

---

## Requisitos previos

- **Node.js** (recomendado: versión 18 o superior)
- **npm** (incluido con Node)

---

## Instalación y ejecución

1. Clona el repositorio y entra en la carpeta:

```bash
git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_REPO>
```

2.	Instala dependencias:
  ```bash
npm install
```
3.	Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```
4.	Abre en el navegador la URL que aparezca en consola (normalmente):

http://localhost:5173

⸻

Scripts disponibles
•	Iniciar en modo desarrollo:
  ```bash
npm run dev
```
• Generar build de producción:
```bash
npm run build
```
•	Previsualizar la build:
```bash
npm run preview
```
•	Ejecutar tests:
```bash
npm run test
```
⸻

Estructura del proyecto (resumen)
	•	src/components/ → componentes visuales (tarjetas, listado, detalle, etc.)
	•	src/hooks/ → custom hooks (lógica de API, estados, paginación…)
	•	src/api/ → funciones para consumir la API
	•	src/types/ → tipos TypeScript de la API
	•	src/test/ → ficheros auxiliares de testing (fixtures y setup)

Esta separación permite mantener el código ordenado, evitando mezclar la interfaz con la lógica de obtención de datos.

⸻

Pruebas incluidas

Las pruebas automáticas verifican:
	•	carga inicial de personajes
	•	búsqueda por nombre
	•	filtrado por estado
	•	selección y visualización del detalle

La prueba del detalle es la más delicada, ya que requiere esperar a que aparezca la información en pantalla antes de comprobarla.
