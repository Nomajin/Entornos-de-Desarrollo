const fs = require('fs');

let prompt = require('prompt-sync')();

fs.copyFileSync('archivo_1.txt', 'archivo_2.txt');
