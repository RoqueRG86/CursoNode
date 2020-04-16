//este es un archivo optimizado para utilizacion de Yargs y como configurar los comando de forma eficiente

optsVar = {
    base: { demand: true, alias: 'b' },
    limite: { demand: true, alias: 'l' }
};

const argv = require('yargs')
    .command('listar', 'Implime en la consola la tabla de multiplicar', optsVar)
    .command('crear', 'Crea un archivo con una tabla de multiplicar', optsVar)
    .help().argv;

module.exports = {
    argv
};