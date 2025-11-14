// Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. 
// Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo,
// visualizando el número que ha tecleado el usuario y su resultado («Del número X, su potencia es X y su raíz X» ). 
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.

let prompt = require('prompt-sync')();

formatoOk = true;
let N_1 = prompt ('Introduzca un primer numero:');
N_1 = Number (N_1);

if (Number.isNaN(N_1)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let Potencia = N_1 * N_1;
Potencia = Number (Potencia);

let Raiz = Math.sqrt (N_1);
Raiz = Number (Raiz)



if (formatoOk) {

    if (N_1 <= 0) {

    console.log(` Formato no valido`);
    } else {

    console.log(` La potencia de ${N_1} al cuadrado es ${Potencia}`);
    console.log(` `);
    console.log(` La raiz cuadrada de ${N_1} es ${Raiz}`);
    }

} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}