// las uniones nos permiten tener una variable que pueda ser de diferentes tipos, o que una funcion pueda devolver diferentes valores y no solo uno en especifico

let age: number | string = 24;
age = 25;
age = "26";
// age = true; da error ya que el boolean no está indicado



// tambien podemos definir que una variable sea de un tipo u otro, asi las keys pueden ser diferentes segun lo que se pida
type Point2 = {
    x: number,
    y: number
};
type Loc = {
    lat: number,
    long: number
};  

let coordinates: Point2 | Loc = {
    x: 25,
    y: 50
};
// y modificando ahora a que sea de tipo loc:
coordinates = {
    lat: 125.12,
    long: 39.42
};

// type narrowing es el momento en el que typescript evalua la logica dentro de una funcion y decide si aplicar un metodo u otro que pueda juntar diferentes tipos de datos
function calculateTax(price: number | string, tax: number): number{
    // return price * tax //! este codigo da error ya que price puede ser de tipo string, solo funcionaria si fuera de tipo number o any
    if ( typeof price === "string" ){
        price = price.replace("€", "") //! aqui el price es siempre de tipo string
        return parseFloat(price) * tax
    } else {
        return price * tax //! aqui price es siempre de tipo number
    }
};


// version optimizada:
function optimisedTax(price: number | string, tax: number): number{
    if( typeof price === "string") {
        price = parseFloat(price.replace("€","")); //! si el precio es string entrara en este if y se parseara a number, sino es string pasara al return directo
    }

    return price * tax;
};