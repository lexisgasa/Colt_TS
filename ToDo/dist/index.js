"use strict";
// typescript acepta el objeto document, que tiene una interfaz default tipo Document que extiende de otras intefaces
// los metodos ya esperan en sus parametros el tipo de dato que se debe pasar y el metodo tiene anotado que tipo de dato sera devuelto
const btn = document.querySelector("#btn"); // ! document no da error,el metodo querySelector espera una string, pero su retorno tiene que ser o un elemento HTML un null en caso de no encontrarlo
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => console.log("hello world")); // ! se tiene que poner el " ? " ya que potencialmente podria ser null, entonces de no ser null, aplicaria el metodo addEventListener, que a su vez espera en sus parametros una string y una funcion
const button = document.querySelector("#btn"); // ! button in the line 4 is either an HTML element or null, with the non null assertion operation it specifies that it will 100% be a html element, thus in the line 5 wouldn't be needed the exclamation mark
const mistery1 = "hello"; // ! typescript knows mistery1 is the variable for hello
let mistery2 = "Hello world"; // ! know typescript knows mistery2 must contain a string
let mistery3 = "eps"; // ! know is just unknown type 
// mistery3.length // ! this code will result in error since typescript doesn't know that kind of data type is mistery3 thus can't apply a string property
let numChars = mistery3.length; //! eventho mistery3 is still unknown and will be for the whole document, just in this case evaluate as a string
const input = document.querySelector("#todoInput"); //! is essential to use as HTMLInputElement since typescrip will know it will be an element not specifcally which kind of element, so the property value won't exist there, since it's needed later it will be needed to specify that is an html INPUT element
// ============ to do list ============
// lineas 21,22 cogemos la form y el elemento <ul> donde añadir los <li>.
// creamos una interface (forma de objeto) en la linea 26 que requiere un texto string y un completed boleano 
// en la linea 32 simplemente se crea todos que sera un array, pero un array que contendra objetos del tipo Todo
// en la linea 35 hay una funcion que se activara cuando se haga click en la form, previene el refresh de la pagina automatica, crea un objeto nuevo newTodo que coge el valor del value y por default su completed sera falso, y llama a la funcion para crear un nuevo elemento de la linea 50, finalmente con ese elemento creado lo pushea al array de la linea 33 y resetea el valor del input
// la funcion que llama la linea 44 se declara en la 51, creara el elemento li que añadira, el input que se le establece que sera de tipo checkbox, como en la linea 44 el paramatro que se espera sera el recien creado en la 40, newTodo, se puede acceder a su propiedad text que ya sera el value, por lo tanto indicamos que el parametro de esta nueva funcion.text ya sera el value por si, metemos el input al elemento recien creado, y el objeto este al elemento li.
const form = document.querySelector("#todoForm");
const list = document.querySelector("ul");
const todos = [];
const handleEvent = (e) => {
    e.preventDefault();
    // ! e de default va a ser del tipo any pero lo ideal seria especificar que es del tipo Event del DOM
    const newTodo = {
        text: input.value,
        completed: false
    };
    createNewElement(newTodo);
    todos.push(newTodo);
    // ! hacemos un objeto tipo Todo que el texto sera la string del input y el complete será falso inicialmente, y hacemos un push a todos que es un array que puede contener strings del tipo Todo, es decir el resultado final sera un array con objetos anidados
    input.value = "";
};
const createNewElement = (todo) => {
    const newLI = document.createElement("li"); // ! typescript en la variable newLI ya sabes que va a ser del tipo HTMLLIElement porque es el objeto creado
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleEvent);
