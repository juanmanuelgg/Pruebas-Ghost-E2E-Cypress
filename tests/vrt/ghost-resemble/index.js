const compareImages = require('resemblejs/compareImages');
const config = require('./config.json');
const fs = require('fs');
const path = require('path');

const { viewportHeight, viewportWidth, folders, options } = config;
const Ghost3 = config.urlIni;
const Ghost4 = config.urlCom;

async function executeTest() {
    const respuesta = {};
    const promesas = [leerDirectorio(Ghost3), leerDirectorio(Ghost4)];

    const resultados = await Promise.all(promesas);
    const contenidoDir3 = resultados[0];
    const contenidoDir4 = resultados[1];

    for (let f = 0; f < 10; f++) {
        try {
            if (`${contenidoDir3[f]}` !== `${contenidoDir4[f]}`) {
                console.error('Los nombres de los directorios no coinciden');
                continue;
            }
            const nombreDirectorio = contenidoDir3[f];

            const promesas = [
                leerDirectorio(`${Ghost3}/${nombreDirectorio}`),
                leerDirectorio(`${Ghost4}/${nombreDirectorio}`)
            ];
            const subresult = await Promise.all(promesas);
            const G3 = subresult[0];
            const G4 = subresult[1];
            let resultInfo = {};
            for (b of G4) {
                const data = await compareImages(
                    `${Ghost3}/${nombreDirectorio}/${b}`,
                    `${Ghost4}/${nombreDirectorio}/${b}`,
                    options
                );

                resultInfo[b] = {
                    isSameDimensions: data.isSameDimensions,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: data.misMatchPercentage,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime
                };

                const folder = `./screenshots/compare/${nombreDirectorio}`;
                if (!fs.existsSync(folder)) {
                    fs.mkdir(folder, { recursive: true }, (err) => {
                        if (err) throw err;
                    });
                }
                fs.writeFileSync(`${folder}/${b}`, data.getBuffer());

                // Ver progreso
                console.log(`${Ghost3}/${nombreDirectorio}/${b}`);
                console.log(`${Ghost4}/${nombreDirectorio}/${b}`);
                console.log(`${folder}/${b}`);
                console.log('----------------------------------');
            }
            respuesta[nombreDirectorio] = resultInfo;
        } catch (error) {
            console.error('Error al procesar las comparaciones:', error);
        }
    } // rof </recorrer escenarios>

    return respuesta;
}

function leerDirectorio(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (error, archivos) => {
            if (error) reject(error);
            else resolve(archivos);
        });
    });
}

function screenshot(nombreDirectorio, imagen) {
    return `
  <div class="browser" id="test0">
    <div class=" btitle">
        <h3>Browser: ${imagen}</h3>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Referencia ${Ghost3}</span>
        <img class="img2" src="${Ghost3}/${nombreDirectorio}/${imagen}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test ${Ghost4}</span>
        <img class="img2" src="${Ghost4}/${nombreDirectorio}/${imagen}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./screenshots/compare/${nombreDirectorio}/${imagen}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>
  `;
}

function directorio(nombreDirectorio, respuesta) {
    return `
  <h2>${nombreDirectorio}</h2>
  ${Object.keys(respuesta[nombreDirectorio]).map((imagen) => {
      return screenshot(nombreDirectorio, imagen);
  })}
  `;
}

function createReport(datetime, respuesta) {
    return `
  <html>
    <head>
      <title> VRT Report </title>
      <link href="index.css" type="text/css" rel="stylesheet">
    </head>
    <body>
      <h1>Reporte para 
        <a href="${Ghost3}"> ${Ghost3}</a>
        <a href="${Ghost4}"> ${Ghost4}</a>
      </h1>
      <p>Executado: ${datetime}</p>
      <div id="visualizer">
        ${Object.keys(respuesta).map((nombreDirectorio) => {
            return directorio(nombreDirectorio, respuesta);
        })}
      </div>
    </body>
  </html>
  `;
}

async function main() {
    const respuesta = await executeTest();
    console.log(respuesta);

    const datetime = new Date().toISOString().replace(/:/g, '');
    const report = createReport(datetime, respuesta);
    fs.writeFileSync(`../docs/index.html`, report);
    fs.copyFileSync('./index.css', `../docs/index.css`);
    fs.cpSync('./screenshots', `../docs/screenshots`, { recursive: true });

    console.log(
        '-------------------------------------------------------------'
    );
    console.log(
        'Execution finished. Check the report under the results folder'
    );
}
main();
