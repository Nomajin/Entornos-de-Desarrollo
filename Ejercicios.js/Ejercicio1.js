//Lee desde entrada dos variables numéricas A y B. 
// Con ellas se pide realizar un algoritmo 
// que intercambie los valores de ambas variables 
// y muestre cuánto valen al final las dos variables.


//https://www.npmjs.com/package/prompt-sync?activeTab=readme

let prompt = require('prompt-sync')();

let a = prompt ('Introduzca a:');
a = Number (a);


let b = prompt ('Introduzca b:');
b = Number (b);


//Patron de intercambio

bTemporal = b;
bTemporal = Number (bTemporal);

b = a;
a = bTemporal;

//Back ` tb sirve para declarar cadenas te permite interpolacion de cadenas
console.log (`a = ${a}, b = ${b}`);

//Sin interpolacion, uso concatenacion de cadenas +
//console.log ('a = ' + a +',b = ' + b);



