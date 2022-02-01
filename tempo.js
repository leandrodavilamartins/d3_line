const moment = require('moment')

//const dataHoje = new Date();
const momentoHoje = moment('2018-02-25'); 
console.log(momentoHoje.format('DD/MM/Y')); // converte data do formato internacional para o formato brasileiro 