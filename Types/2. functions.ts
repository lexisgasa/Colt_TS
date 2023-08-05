// a las funciones tambien se le pueden poner los parametros en los argumentos, utilizar un metodo de otro tipo de dato o cambiar el tipo de data dara error
function square(num: number){
    return num * num;
};

function greet(person: string){
    return `Hi there, ${person}!`
};

// con 3 argumentos, si solo se pasa 1 o 2 dara error de que falta uno, indica que tipo de parametros es el que falta, o de haber cambiado el tipo de dato indica cual seria
const doSomething = (person: string, age: number, isFunny: boolean) => {};



square(3);
// greet(true) da error, espera un string
doSomething("ChickenFace", 15, true) // así es correcto, de faltar un parametro lo indicaria, o de utilizar otro tipo de dato daría error




// parametros por defecto van igual que en una funcion normal

function saySomething (message: string = "Hey", person: string = "you") {
    return `${message}, ${person}!`
}


// funcion espera de vuelta un tipo de data de tipo number especificado despues de los parentersis
const addNumbers = (x: number, y: number): number => x + y;


// tambien puede devolver más de un tipo, si math.random es mas pequeño que 0.5 devuelve el numero del parametro como string, sino devuelvelo normal - si no se especifica de tipo string o number dara error.
function rando (num:number):number | string {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}


// funciona en arrow functions igual
const add = (x: number, y: number): number => x + y;

// el tipo void se usa solo para funciones que no devuelven ningun valor, void de cualquier data.
const doNothing = ():void => {
    console.log("anything")
    // return // ! no se puede usar porque el tipo void no espera return, de igual manera que si hubiera algun tipo especificado, la funcion espera un return
};

// el tipo never nunca va a devolver un error, por lo que tampoco espera un return
const makeError = (msg:string = "Impossible to reach" ):never => {
    throw new Error(msg);
};



/*
//? algo de practica
escribe una funcion llamada "twoFer" que acepte el nombre de una persona, debe devolver una string en el formato "one for -name-, one for me", el default debe ser "you".

escribe una funcion llamada "isLeapYear()"" que acepte un año y devuelve true o false depende si es un leapyear o no
leapyear es multiple de 4 y NO de 100 o es multiple de 400
*/
const twoFer = (name: string = "you"): string => {
    return `one for ${name}, one for you;`
};


const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 100) || year % 400 === 0 
};

// con las funciones definidas, recordar llamarlas, cd en la carpeta donde se encuentra el archivo de ts, tsc archivo.ts para compilarlo a un archivo .js, y node archivo.js para llamarlo desde la consola
console.log(twoFer());
console.log(twoFer("Alex"));
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
