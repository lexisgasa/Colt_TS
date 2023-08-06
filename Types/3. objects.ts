// esta funcion tiene como parametro un objeto que se compone de "first" y de "last", ambos deben de ser strings o dara error
// aunque ts infiere automaticamente que es de tipo void ya que es un console.log, no esta de mas anotarlo
function printName(person:{first: string, last:string}):void {
    console.log(`${person.first} ${person.last}`)
};

printName({first: "Thomas", last: "Jenkins"}); 

// es poco comun hacerlo de la siguiente forma, pero tambien es posible crear una variable e indicar los de que tipo seran sus keys
let coordinate: {x: number, y: number} = {x: 34, y: 5};


// mas comun crear una plantilla y decir que la variable va a seguir esa plantilla
type Point = {
    x: number,
    y: number
};
let coordinate2: Point = {x: 1, y: 99}