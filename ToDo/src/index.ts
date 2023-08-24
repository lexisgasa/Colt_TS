// typescript acepta el objeto document, que tiene una interfaz default tipo Document que extiende de otras intefaces
// los metodos ya esperan en sus parametros el tipo de dato que se debe pasar y el metodo tiene anotado que tipo de dato sera devuelto

const btn = document.querySelector("#btn"); // ! document no da error,el metodo querySelector espera una string, pero su retorno tiene que ser o un elemento HTML un null en caso de no encontrarlo
btn?.addEventListener("click", () => console.log("hello world")) // ! se tiene que poner el " ? " ya que potencialmente podria ser null, entonces de no ser null, aplicaria el metodo addEventListener, que a su vez espera en sus parametros una string y una funcion


const button = document.querySelector("#btn")!;  // ! button in the line 4 is either an HTML element or null, with the non null assertion operation it specifies that it will 100% be a html element, thus in the line 5 wouldn't be needed the exclamation mark

const mistery1 = "hello"; // ! typescript knows mistery1 is the variable for hello
let mistery2 = "Hello world"; // ! know typescript knows mistery2 must contain a string
let mistery3: unknown = "eps" // ! know is just unknown type 
// mistery3.length // ! this code will result in error since typescript doesn't know that kind of data type is mistery3 thus can't apply a string property
let numChars: number = (mistery3 as string).length //! eventho mistery3 is still unknown and will be for the whole document, just in this case evaluate as a string