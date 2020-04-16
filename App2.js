/**
 * Obtener parametros desde consola mediante el process
 */

const { crearArchivo, listaTabla } = require('./multiplicar/Multiplicar');
//const argv = require('./config/Yargs');//carga todo el objeto global
const argv = require('./config/Yargs').argv; //Extraigo solo lo que necesito
//console.log(argv);// Implime el arrglo de listado que se captura cmd node App2 crear eliminar -- base 10

//Ejemplo ejecutar comadno listar
let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        console.log('Listar');
        listaTabla(argv.base, argv.limite).then(archivo => console.log(`Tabla creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No se reconoce comando');
        break;
}




//let parametro = args[2]; //posicion
//let base = parametro.split('=')[1];
//console.log(argv.base);
//console.log(argv.limite);//Se ocupado para los yards recibor parametros desde console cmd




/*
crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));*/