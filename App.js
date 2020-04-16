/**
 * Ejemplo de manejo de paquetes de Node preinstalado
 * utilizando paquete SystemFile
 */
const { crearArchivo } = require('./multiplicar/Multiplicar');
//const fs = require('express');
//const fs = require('./fs');

let base = '7';
//let contenido = "";

/*//Se optimizo en el archivo Multiplicar
for (let a = 1; a < 11; a++)
    contenido += `${base} * ${a} = ${base * a} \n`;
const data = new Uint8Array(Buffer.from(contenido));
fs.writeFile(`Archivos/Tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo Tabla-${base}.txt ha sido creado`);
});
*/

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));