//exercício 01
let string1 = "123";
let string2 = "123.45";
let string3 = "";
let string4 = "abc";
let string5 = "0";
let numero1 = Number(string1);
let numero2 = Number(string2);
let numero3 = Number(string3);
let numero4 = Number(string4);
let numero5 = Number(string5);
console.log(numero1, typeof numero1);
console.log(numero2, typeof numero2);
console.log(numero3, typeof numero3);
console.log(numero4, typeof numero4);
console.log(numero5, typeof numero5);

//exercício 02
let string01 = "123";
let string02 = "123.45";
let numeroInteiro = parseInt(string01);
let numeroDecimal = parseFloat(string02);
console.log(numeroInteiro, typeof numeroInteiro); // 123, number
console.log(numeroDecimal, typeof numeroDecimal); // 123.45, number
