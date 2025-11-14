// Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error. 
// Si es válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”. 
// El año debe ser mayor que 0.

let prompt = require('prompt-sync')();

formatoOk = true;

let N_1 = prompt (' Dime un dia ( Del 1 al 31) = ');
N_1 = Number (N_1);

if (Number.isNaN(N_1)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let N_2 = prompt (' Dime un mes ( Del 1 al 12) = ');
N_2 = Number (N_2);

if (Number.isNaN(N_2)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let N_3 = prompt (' Dime un año ( Del 1 al 2025) = ');
N_3 = Number (N_3);

if (Number.isNaN(N_3)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

if (formatoOk) {

    if ((N_1 > 0) && ( N_1 < 32)) {
        
         if ((N_3 > 0) && (N_3 < 2026)) {


   switch (N_2) {

    case 1:
        console.log(` ${N_1} de Enero de ${N_3}`);
        break;

    case 2:
        console.log(` ${N_1} de Febrero de ${N_3}`);
        break;

    case 3:
         console.log(` ${N_1} de Marzo de ${N_3}`);
        break;

    case 4:
         console.log(` ${N_1} de Abril de ${N_3}`);
        break;

    case 5:
         console.log(` ${N_1} de Mayo de ${N_3}`);
        break;

    case 6:
         console.log(` ${N_1} de Junio de ${N_3}`);
        break;

    case 7:
         console.log(` ${N_1} de Julio de ${N_3}`);
        break;

    case 8:
         console.log(` ${N_1} de Agosto de ${N_3}`);
        break;

    case 9:
         console.log(` ${N_1} de Septiembre de ${N_3}`);
        break;

    case 10:
         console.log(` ${N_1} de Octubre de ${N_3}`);
        break;

    case 11:
         console.log(` ${N_1} de Noviembre de ${N_3}`);
        break;

    case 12:
         console.log(` ${N_1} de Diciembre de ${N_3}`);
        break;

    default:
        console.log(` Ese mes no existe`);

        break;
   }
        
    } else {

    console.log(` Ese año no es valido `);

    }

        
    } else {

    console.log(` Ese dia no es valido `);



    }

   

} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}
