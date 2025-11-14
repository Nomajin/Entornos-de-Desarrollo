//Se pide un algoritmo que lea dos números desde teclado, 
//calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.

//https://www.npmjs.com/package/prompt-sync?activeTab=readme

let prompt = require('prompt-sync')();

formatoOk = true;
let N_1 = prompt ('Introduzca un primer numero:');
N_1 = Number (N_1);

if (Number.isNaN(N_1)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let N_2 = prompt ('Introduzca un segundo numero:');
N_2 = Number (N_2);

if (Number.isNaN(N_2)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

if (formatoOk) {

let Suma = N_1 + N_2;
Suma = Number (Suma);

let Resta = N_1 - N_2;
Resta = Number (Resta);

let Producto = N_1 * N_2;
Producto = Number (Producto);

let Division = N_1 / N_2;
Division = Number (Division);

console.log (`Suma = ${Suma}, Resta = ${Resta}, Producto = ${Producto}, Division = ${Division} `)


}



