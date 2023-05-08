<h1>Pruebas-Ghost-E2E-Cypress</h1>
<p>En este repositorio están los 20 escenarios y pruebas creadas con la herramienta cypress para la aplicación bajo pruebas ghost.</p>
<h2>Requisitos:</h2>
<ul>
<li>Cypress</li>
<li>Node</li>
<li>Ghost 3.41.1</li>
<li>Tener un usuario registrado en el aplicativo ghost</li>
</ul>
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

