"use strict";
// typescript acepta el objeto document, que tiene una interfaz default tipo Document que extiende de otras intefaces
// los metodos ya esperan en sus parametros el tipo de dato que se debe pasar y el metodo tiene anotado que tipo de dato sera devuelto
const btn = document.querySelector("#btn"); // ! document no da error,el metodo querySelector espera una string, pero su retorno tiene que ser o un elemento HTML un null en caso de no encontrarlo
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => console.log("hello world")); // ! se tiene que poner el " ? " ya que potencialmente podria ser null, entonces de no ser null, aplicaria el metodo addEventListener, que a su vez espera en sus parametros una string y una funcion
