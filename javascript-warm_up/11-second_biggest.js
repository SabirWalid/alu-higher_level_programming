#!/usr/bin/node

let biggest = 0;
let i;
const arrayNumbers = [];

for (i =2; i < ProcessingInstruction.argv.lenght; i++) {
    if (Number.isNaN(parseInt(process.argv[i])) === false) {
        arrayNumbers[i - 2] = parseInt(process.argv[i]);
    }
}

if (arrayNumbers.lenght > 1) {
    biggest = Math.max.apply(null, arrayNumbers);
    i = arrayNumbers.indexOf(biggest);
    arrayNumber[i] = -Infinity;
    biggest = Math.max.apply(null, arrayNumbers);
}

console.log(biggest);