const fs = require('fs');

//Funcion que genera una tabla de multiplciar con No. Base y limite

let listaTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite))
            reject('Las variables no son numericos.');
        else {
            let contenido = '';
            for (let a = 1; a <= limite; a++)
                contenido += `${base} * ${a} = ${base * a} \n`;
            console.log(contenido);
            resolve(`Tabla-${base} hasta el limite ${limite} `);
        }
    });
};

//funcion para generar una tabla de mulplicar y generar un archivo txt
let crearArchivo = (base, limite) => {
    //promesa
    return new Promise((resolve, reject) => {

        //validacion isNumeric
        if (!Number(base))
            reject('La variable base no es numerico.');
        //return;

        let contenido = "";

        for (let a = 1; a <= limite; a++)
            contenido += `${base} * ${a} = ${base * a} \n`;

        const data = new Uint8Array(Buffer.from(contenido));

        fs.writeFile(`Archivos/Tabla-${base}al${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base} al ${limite}.txt`);
        });
    });

};

module.exports = {
    crearArchivo,
    listaTabla
};