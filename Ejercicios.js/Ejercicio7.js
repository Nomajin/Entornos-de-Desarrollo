//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. 
// Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.

let prompt = require('prompt-sync')();

formatoOk = true;

 console.log(` `);

let Producto = prompt (' ¿ Cuanto ha costado la compra en total ? ');
Producto = Number (Producto);

if (Number.isNaN(Producto)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

 console.log(` `);

let Mes = prompt (' ¿ En que mes se realizo la compra ? ');
Mes = String (Mes);

if (Number.isNaN(Mes)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

 console.log(` `);

let Porcentaje = 15 / 100;
Porcentaje = Number (Porcentaje);

let dinero_rebajado = 100 * Porcentaje ;
dinero_rebajado = Number (dinero_rebajado);

let Precio_real = 100 - dinero_rebajado;
Precio_real = Number (Precio_real);

if (formatoOk) {

   switch (Mes) {

    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Noviembre":
    case "Diciembre":
        
        console.log (`Su importe total es ${ Producto } €`);
        
        break;
    case "Octubre":

        console.log (`Su importe total es ${ Precio_real } €`);
        break;
        
    default:
        break;
   }


} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}

