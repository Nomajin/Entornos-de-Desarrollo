// Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.

let prompt = require('prompt-sync')();

formatoOk = true;
let N_1 = prompt ('Introduzca un primer numero:');
N_1 = Number (N_1);

if (Number.isNaN(N_1)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}


let N_2 = prompt ('Introduzca un Segundo numero:');
N_2 = Number (N_2);

if (Number.isNaN(N_2)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}


if (formatoOk) {

    if (N_1 > N_2) {

    console.log(` El maximo es ${N_1};`);
    } else {

    console.log(` El maximo es ${N_2};`);

    }

    if (N_1 === N_2) {

    console.log(`${N_1} y ${N_2} son iguales`);
    }

} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}

