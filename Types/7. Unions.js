"use strict";
// las uniones nos permiten tener una variable que pueda ser de diferentes tipos, o que una funcion pueda devolver diferentes valores y no solo uno en especifico
let age = 24;
age = 25;
age = "26";
let coordinates = {
    x: 25,
    y: 50
};
// y modificando ahora a que sea de tipo loc:
coordinates = {
    lat: 125.12,
    long: 39.42
};
// type narrowing es el momento en el que typescript evalua la logica dentro de una funcion y decide si aplicar un metodo u otro que pueda juntar diferentes tipos de datos
function calculateTax(price, tax) {
    // return price * tax //! este codigo da error ya que price puede ser de tipo string, solo funcionaria si fuera de tipo number o any
    if (typeof price === "string") {
        price = price.replace("€", ""); //! aqui el price es siempre de tipo string
        return parseFloat(price) * tax;
    }
    else {
        return price * tax; //! aqui price es siempre de tipo number
    }
}
;
// version optimizada:
function optimisedTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("€", "")); //! si el precio es string entrara en este if y se parseara a number, sino es string pasara al return directo
    }
    return price * tax;
}
;
// un array de tipo any puede tener cualquier tipo de data 
const stuff = [1, 2, true, "asd", { x: 1, y: "hey" }];
// de nuevo, esta es la manera de decir que contiene UN tipo en especifico
const nums = [1, 2, 3, 4, 5];
// esta es la manera de indicar que la variable va a contener un array que sera de un tipo, o de otro en concreto
let chooseOne = [1, 2, 3];
chooseOne = ["asd", "f33"];
// chooseOne = [1,2,3,"hello"] //! error ya que es una mezcla de diferentes tipos de datos en UN array
// esta es la manera de indicar que el array va a contener diferentes tipos de datos
const mixedStuff = [1, 2, "asd"]; //boolean dara error
// los literal types especifican el valor de la variable
let mood;
mood = "Happy";
let today;
today = "Monday";
// today = "tuesday" // ! error because of case sensitive
