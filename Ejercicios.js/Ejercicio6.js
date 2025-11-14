// Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. Diseñar un algoritmo para este propósito.

let prompt = require('prompt-sync')();

formatoOk = true;
let Niños = prompt ('Introduzca el numero de niños que hay en el centro:');
Niños = Number (Niños);

if (Number.isNaN(Niños)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}

let Niñas = prompt ('Introduzca el numero de niñas que hay en el centro:');
Niñas = Number (Niñas);

if (Number.isNaN(Niñas)) {
    console.log ( 'Formato numero incorrecto')
    formatoOk = false;
}


let Estudiantes_Totales = Niños + Niñas;
Estudiantes_Totales = Number (Estudiantes_Totales);

let Media_Niños = Niños % Estudiantes_Totales;
Media_Niños = Number (Media_Niños)

let Media_Niñas = Niñas % Estudiantes_Totales;
Media_Niñas = Number (Media_Niñas)

if (formatoOk) {

   console.log(`Hay ${Niños} niños`)
   console.log(` `)
   console.log(`Hay ${Niñas} niñas`)
   console.log(` `)
   console.log(`Hay ${Estudiantes_Totales} Estudiantes en el centro`)
   console.log(` `)
   console.log(`En el centro hay un ${Media_Niños} % de niños `)
   console.log(` `)
   console.log(`En el centro hay un ${Media_Niñas} % de niñas `)


} else {
    
    console.log ('Los formatos son incorrectos, no se puede hacer la operacion')


}