//requireds
//3 tipos, paquetes nativos, externos, y creados por nosotros (../ o ./)

//destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
const argv = require('./config/yargs').argv;
const colors = require('colors');

//let argv2 = process.argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(`${ lista }`))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(multiplicar);