//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.


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

let N_3 = prompt ('Introduzca un Tercer numero:');
N_3 = Number (N_3);

if (Number.isNaN(N_3)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let Producto = N_1 * N_2 * N_3;
Producto = Number (Producto);

let Suma = N_1 + N_2 + N_3;
Suma = Number (Suma);

if (formatoOk) {

    if (N_1 < 0) {

    console.log(` ${N_1} * ${N_2} * ${N_3} = ${Producto};`);
    } else {

    console.log(` ${N_1} + ${N_2} + ${N_3} = ${Suma};`);

    }

} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}
