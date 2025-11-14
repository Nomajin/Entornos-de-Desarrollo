//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” 
// (para que un número sea par, se debe dividir entre dos y que su resto sea 0).

let prompt = require('prompt-sync')();

formatoOk = true;

 console.log(` `);

let Numero = prompt (' Dime un numero = ');
Numero = Number (Numero);

if (Number.isNaN(Numero)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

console.log(` `);


if (formatoOk) {

  if (Numero % 2 == 0) {
     
     console.log(` Es Par `)

  } else {

     console.log(` Es impar `)

  }

  if (Numero === 0) {

    console.log(` El número no es par ni impar `)


  }


} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}
