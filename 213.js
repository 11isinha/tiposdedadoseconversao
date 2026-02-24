//exercicio 1
let array = [String, Number, Boolean, null, undefined, Symbol, BigInt];
console.log(typeof (array)); 

//exercício 2
let string = String(123);
console.log(string); // "123"

let number = Number("123");
console.log(number); // 123 

let boolean = Boolean(1);
console.log(boolean); // true

let symbol = Symbol("description");
console.log(typeof (symbol)); // Symbol(description)

let bigInt = BigInt(123);
console.log(bigInt); // 123n

let nullValue = null;
console.log(nullValue); // null

let undefinedValue = undefined;
console.log(undefinedValue); // undefined

//exercício 3
let simb = Symbol("teste");
console.log(typeof simb === "symbol"); 

