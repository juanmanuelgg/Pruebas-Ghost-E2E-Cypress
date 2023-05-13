# Pruebas-Ghost-E2E-Cypress

En este repositorio están los 20 escenarios y pruebas creadas con la herramienta cypress para la aplicación bajo pruebas ghost.

## Requisitos:

- Cypress
- Node
- Ghost 3.41.1
- Ghost 4.44.0
- Tener un usuario registrado en el aplicativo ghost

## Montar Ghost localmente (OPCIONAL):

Para montar ghost localmente, se debe tener instalado node, npm, docker y git, luego se debe ejecutar los siguientes comandos:

```bash
# Esta instrucción corre ghost 3.41.1 en el puerto 3001 y MySQL 5.7.40
npm run docker:up
```

Este comando descargara la imagen de ghost y la ejecutara en el puerto 3001, luego para eliminarlo se puede ejecutar el siguiente comando:

```bash
# Es importante aclarar que este comando eliminara el contenedor, la imagen y todos los datos que se hayan creado en ghost y la base de datos.
npm run docker:down
```

Para completar la configuración de ghost, se debe ingresar a la url [http://localhost:3001/ghost](http://localhost:3001/ghost), y crear el usuario administrador. Si desea evitar mas configuraciones sera importante que el email sea: jimenezcelisj2@gmail.com y la password sea: 12345678910

## Pasos para correr los escenarios de pruebas:

- Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-Ghost-E2E-Cypress.git
- Ejecutar **npm install**, esto instalara dos librerias necesarias para correr los escenarios ,que son faker y mochawesome.
- Se deben cambiar las variables globales para que funcionen correctamente las pruebas, en la ruta **/cypress/environment/credentials.js** existen 3 variables, **email :** remplazela por el email que tiene registrado localmente en ghost,**password :** remplazela por la contraseña de su cuenta local en ghost y finalmente
  **baseUrl :** es necesario remplazar el puerto por el cual esta escuchando la aplicacion.
- Aqui hay dos opciones abrir cypress y ejecutar cada funcionalidad una a una con `cypress open`, para gener un reporte y correr todas las funcionalidad se debe ejecutar `cypres run --headless --reporter mochawesome`
- Ejecutar este comando, generara varios archivos :

1. primero si existio algun test donde los asserts no fueron existosos, en la carpeta de **screenshots/\*\*funcionalidad del fallo**, se guardaran los screenshots.
2. En la carpeta de **/videos**, quedan los videos de cada funcionalidad.

```bash
# Ejemplo de ejecución de pruebas (headless)
npm run test
# Ejemplo de ejecución de pruebas (con interfaz)
npm start
```

## Reporte de pruebas:

Para ver el reporte de pruebas, se debe abrir el archivo **index.html** que se encuentra en la carpeta **docs**, este archivo se genera automaticamente al ejecutar el comando `cypress run --headless --reporter mochawesome`. Otra opcion es revisarlo en la siguiente url [Reporte de pruebas](https://juanmanuelgg.github.io/Pruebas-Ghost-E2E-Cypress/)

- Funcionalidad 1: [Reporte de la funcionalidad 1](https://juanmanuelgg.github.io/Pruebas-Ghost-E2E-Cypress/Reporte-funcionalidad-1.html)
- Funcionalidad 2: [Reporte de la funcionalidad 2](https://juanmanuelgg.github.io/Pruebas-Ghost-E2E-Cypress/Reporte-funcionalidad-2.html)
- Funcionalidad 3: [Reporte de la funcionalidad 3](https://juanmanuelgg.github.io/Pruebas-Ghost-E2E-Cypress/Reporte-funcionalidad-3.html)
- Funcionalidad 4: [Reporte de la funcionalidad 4](https://juanmanuelgg.github.io/Pruebas-Ghost-E2E-Cypress/Reporte-funcionalidad-4.html)

## Integrantes:

- Luz Stella Ochoa Marin (ls.ochoa@uniandes.edu.co)
- Juan Manuel González Garzón (jm.gonzalez1844@uniandes.edu.co)
