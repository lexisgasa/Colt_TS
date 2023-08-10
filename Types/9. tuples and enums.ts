// tuples son arrays de una longitudad especifica y los elementos deben de seguir el orden indicado

// esto creara una variable que aceptará un array con cualquier numero dentro, todos los numeros que se quieran
// let color: number[];


// las tuples se indican como un array, y dentro los tipos de datos que van a haber, el orden importa
let color: [number, number, number];
color = [255, 0, 255] // ! esta es la forma correcta, otro numero o cualquier otra adición dara error
// color = ["255", 0, 255] // ! esto da error ya que el primero valor es una string y no un numero como tal
// color = [255, 0, 255, 0] // ! esto tambien da error ya que aunque todo es de tipo number como indicado, hay un elemento de mas


// las tuples tambien pueden ser types, y ser valores especificos
type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, "OK"]






// -----------------------------------
// -------------ENUMS-----------------
// ----------------------------------



// los enums son tipos de variables en un set que nos ayudan a nosotros como personas identificar mejor el valor a la hora de usarlos
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
};