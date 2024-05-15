# Pruebas con CRUD, MapBox, FullCalendar y Chart.js.


## Descripción 📄

Este repositorio contiene los recursos de diferentes aplicaciones web para realizar pruebas con tecnologías como CRUD, MapBox, FullCalendar y Chart.js.



## Características ✨

- **Crear productos**: Crear productos con nombre, precio y descripción. Después de crear un producto, se puede editar o eliminar.
- **Guardar informacion en base de datos**: Guardar la informacion en la base de datos.
- **Buscar sitios en Mapbox**: Buscar sitios en Mapbox y mostrarlos en el mapa. Después de buscar un sitio, se puede guardar en la base de datos. y enseñar en por categorias.
- **Usar FullCalendar**: Se puede crear eventos en FullCalendar y guardarlos en la base de datos.


## Tecnologías Utilizadas 💻

- TypeScript
- HTML5
- SCSS 
- [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.
- [MapBox](https://www.mapbox.com/)
- [FullCalendar](https://fullcalendar.io/)
- [Chart.js](https://www.chartjs.org/)

## Requisitos 📋

- Node.js y npm instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).
- Angular CLI instalado globalmente. Puedes instalarlo con el siguiente comando:

```bash
npm install -g @angular/cli
```

## Instalación 🛠️

1. Clona el repositorio:
```bash
git clone https://github.com/iviruu/sprin_8.git
```

2. Ingresa al directorio del proyecto:
```bash
cd front
```

3. Instala las dependencias:
```bash
npm install
```

4. Levanta el servidor(Abrimos nuevo terminal):

```bash
Ctrol + Mayus + `
```

5. Ingresa al directorio del servidor:

```bash
cd server
```

6. Instala las dependencias:

```bash
npm install
```

7. Tienes que entrar en xampp y abrir el servidor de apache y mysql.

8. Tienes que crear una base de datos en phpmyadmin con el nombre de "almacen".

9. Tienes que importar el archivo almacen.sql que esta en la carpeta "db".

10. Levanta el servidor:

```bash 
nodemon dist/index.js
```


## Ejecución ▶️
Ejecuta la aplicación con el siguiente comando en terminal de front( en terminal con cd front):

```bash
ng serve -o
```

Y para usar MapBox tienes que usar un token, lo tienes que poner en linia de codigo que estan en carpeta enviaronment.

apiKey: ''( entre comillas pones tu token)


## Uso 🚀

- CRUD: Crear, editar y eliminar productos.
- MapBox: Buscar sitios y guardarlos en la base de datos.
- FullCalendar: Crear eventos y guardarlos en la base de datos.
- Chart.js: Mostrar gráficos de barras con datos.









