<h1>Pruebas-Ghost-E2E-Cypress</h1>
<p>En este repositorio están los 20 escenarios y pruebas creadas con la herramienta cypress para la aplicación bajo pruebas ghost.</p>

<h2>Requisitos:</h2>
<ul>
<li>Cypress</li>
<li>Node</li>
<li>Ghost 3.41.1</li>
<li>Tener un usuario registrado en el aplicativo ghost</li>
</ul>

<h2>Montar Ghost localmente (OPCIONAL):</h2>
<p>Para montar ghost localmente, se debe tener instalado node, npm, docker y git, luego se debe ejecutar los siguientes comandos:</p>

```bash
# Esta instrucción corre ghost 3.41.1 en el puerto 3001 y MySQL 5.7.40
npm run docker:up
```

<p>Este comando descargara la imagen de ghost y la ejecutara en el puerto 3001, luego para eliminarlo se puede ejecutar el siguiente comando:</p>

```bash
# Es importante aclarar que este comando eliminara el contenedor, la imagen y todos los datos que se hayan creado en ghost y la base de datos.
npm run docker:down
```

<p>Para completar la configuración de ghost, se debe ingresar a la url <a href="http://localhost:3001/ghost">http://localhost:3001/ghost</a>, y crear el usuario administrador. Si desea evitar mas configuraciones sera importante que el email sea: jimenezcelisj2@gmail.com y la password sea: 12345678910</p>

<h2>Pasos para correr los escenarios de pruebas:</h2>
<ul>
<li>Clonar el repositorio en su equipo local, git clone https://github.com/juanjice29/Pruebas-Ghost-E2E-Cypress.git</li>
<li>Ejecutar <b>npm install</b>, esto instalara dos librerias necesarias para correr los escenarios ,que son faker y mochawesome.</li>
<li>Se deben cambiar las variables globales para que funcionen correctamente las pruebas, en la ruta <b>/cypress/environment/credentials.js</b> existen 3 variables, <b>email : </b> remplazela por el email que tiene registrado localmente en ghost,<b>password : </b> remplazela por la contraseña de su cuenta local en ghost y finalmente 
<b>baseUrl : </b> es necesario remplazar el puerto por el cual esta escuchando la aplicacion.</li>
<li>Aqui hay dos opciones abrir cypress y ejecutar cada funcionalidad una a una con <b>cypress open</b>, para gener un reporte y correr todas las funcionalidad se debe ejecutar <b>cypress run --headless --reporter mochawesome </b></li>
<li>Ejecutar este comando, generara varios archivos :<ul>
    <li>primero si existio algun test donde los asserts no fueron existosos, en la carpeta de <b>screenshots/**funcionalidad del fallo**</b>, se guardaran los screenshots.</li>
    <li>En la carpeta de <b>/videos</b>, quedan los videos de cada funcionalidad.</li>    
</ul> </li>
</ul>

```bash
# Ejemplo de ejecución de pruebas (headless)
npm run test
# Ejemplo de ejecución de pruebas (con interfaz)
npm start
```

<h2>Reporte de pruebas:</h2>
<p>Para ver el reporte de pruebas, se debe abrir el archivo <b>index.html</b> que se encuentra en la carpeta <b>docs</b>, este archivo se genera automaticamente al ejecutar el comando <b>cypress run --headless --reporter mochawesome</b>. Otra opcion es revisarlo en la siguiente url <a href="https://juanjice29.github.io/Pruebas-Ghost-E2E-Cypress/docs">Reporte de pruebas</a>
</p>

<h2>Integrantes:</h2>
<ul>
<li>Juan José Jiménez Celis</li>
<li>Andrés Lombo Caicedo</li>
<li>Luz Stella Ochoa Marin</li>
<li>Juan Manuel González Garzón</li>
</ul>
