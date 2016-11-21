var romanNumeralConvertor = require('./romanNumeralConvertor');

var arg = process.argv.slice(2);
console.log(arg + ' = ' + romanNumeralConvertor(arg));
