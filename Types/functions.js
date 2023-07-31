// a las funciones tambien se le pueden poner los parametros en los argumentos, utilizar un metodo de otro tipo de dato o cambiar el tipo de data dara error
function square(num) {
    return num * num;
}
;
function greet(person) {
    return "Hi there, ".concat(person, "!");
}
;
// con 3 argumentos, si solo se pasa 1 o 2 dara error de que falta uno, indica que tipo de parametros es el que falta, o de haber cambiado el tipo de dato indica cual seria
var doSomething = function (person, age, isFunny) { };
square(3);
// greet(true) da error, espera un string
doSomething("ChickenFace", 15, true); // así es correcto, de faltar un parametro lo indicaria, o de utilizar otro tipo de dato daría error
// parametros por defecto van igual que en una funcion normal
function saySomething(message, person) {
    if (message === void 0) { message = "Hey"; }
    if (person === void 0) { person = "you"; }
    return "".concat(message, ", ").concat(person, "!");
}
// funcion espera de vuelta un tipo de data de tipo number especificado despues de los parentersis
var addNumbers = function (x, y) { return x + y; };
// tambien puede devolver más de un tipo, si math.random es mas pequeño que 0.5 devuelve el numero del parametro como string, sino devuelvelo normal - si no se especifica de tipo string o number dara error.
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// funciona en arrow functions igual
var add = function (x, y) { return x + y; };
// el tipo void se usa solo para funciones que no devuelven ningun valor, void de cualquier data.
var doNothing = function () {
    console.log("anything");
    // return // ! no se puede usar porque el tipo void no espera return, de igual manera que si hubiera algun tipo especificado, la funcion espera un return
};
// el tipo never nunca va a devolver un error, por lo que tampoco espera un return
var makeError = function (msg) {
    if (msg === void 0) { msg = "Impossible to reach"; }
    throw new Error(msg);
};
/*
//? algo de practica
escribe una funcion llamada "twoFer" que acepte el nombre de una persona, debe devolver una string en el formato "one for -name-, one for me", el default debe ser "you".

escribe una funcion llamada "isLeapYear()"" que acepte un año y devuelve true o false depende si es un leapyear o no
leapyear es multiple de 4 y NO de 100 o es multiple de 400
*/
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for you;");
};
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 100) || year % 400 === 0;
};
console.log(twoFer());
console.log(twoFer("trol"));
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
console.log(isLeapYear(2014));
