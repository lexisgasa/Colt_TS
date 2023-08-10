"use strict";
// tuples son arrays de una longitudad especifica y los elementos deben de seguir el orden indicado
// esto creara una variable que aceptará un array con cualquier numero dentro, todos los numeros que se quieran
// let color: number[];
// las tuples se indican como un array, y dentro los tipos de datos que van a haber, el orden importa
let color;
color = [255, 0, 255]; // ! esta es la forma correcta, otro numero o cualquier otra adición dara error
const goodResponse = [200, "OK"];
// -----------------------------------
// -------------ENUMS-----------------
// ----------------------------------
// los enums son tipos de variables en un set que nos ayudan a nosotros como personas identificar mejor el valor a la hora de usarlos
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
;
// tambien puede tener valores de strings
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
;
console.log(ArrowKeys); // objeto con keys y valores
console.log(ArrowKeys.DOWN); // solo "down"
console.log(ArrowKeys["UP"]);
