const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor \"base\" ${ base } no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor \"limite\" ${ limite } no es un numero`);
            return;
        }

        let data = '';
        console.log("=================".green);
        console.log("Tabla del 3".green);
        console.log("=================".green);
        for (let i = 1; i <= limite; i++) {
            if (i % 2 === 0) {

                data += `${ base } * ${ i } = ${ base * i }\n`.blue;

            } else {

                data += `${ base } * ${ i } = ${ base * i }\n`.grey;

            }
        }

        resolve(data);

    });
};

/*module.expots.crearArchivo*/
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor \"base\" ${ base } no es un numero`);
            return;
        }


        if (!Number(limite)) {
            reject(`El valor \"limite\" ${ limite } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${ base }.txt`);
        });

    });


}


module.exports = {
    crearArchivo,
    listarTabla
}