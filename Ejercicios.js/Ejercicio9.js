//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. 
// Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, 
// se puede acceder si hemos superado una prueba de acceso.

let prompt = require('prompt-sync')();

formatoOk = true;

console.log(`Hola, le doy la bienvenida al sistema de admision a grados superiores`)
console.log(` `);

let Bachiller = prompt (' Para poder ingresar a un grado superior se necesita haber conseguido la titulacion de Bachiller ¿ Usted posee titulacion de Bachiller ? (S/N) ');
Bachiller = String (Bachiller);

if (Number.isNaN(Bachiller)) {
    console.log ( 'Formato incorrecto')
    formatoOk = false;
}

console.log(` `);

if (formatoOk) {

  if ( Bachiller === 'S') {
     
     console.log(` Perfecto, puede pasar ha hablar con mi compañera`)

  } else {

        let Prueba_acceso = prompt (' Si no tiene Bachiller, tambien puede acceder aprobando una prueba de acceso ¿ Usted la ha realizado y aprobado  ? (S/N) ');
        Prueba_acceso = String (Prueba_acceso);

        if (Prueba_acceso === 'S') {

            console.log(` Bien, puede pasar ha hablar con mi compañera`)

        } else {

            console.log(` Lo siento, no puedes cursar un grado superior`)
        }
     } 

} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}




