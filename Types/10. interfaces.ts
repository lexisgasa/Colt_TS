// las interfaces se parecen mucho a los types, por lo pronto la diferencia es que la declaracion va sin igual.
type Pointtt = {
    x: number,
    y: number
};

const pt: Pointtt = {
    x: 124,
    y: 413123
}; 



interface InterPoint {
    x: number,
    y: number
};

const interPt: InterPoint = {
    x: 123,
    y: 231
}


// igual que el type, se pueden crear propiedades solo de lectura u opcionales

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    sayHi: () => string // ! un metodo -funcion () =>- que devuelve una string
    //sayHi(): string //! otra manera de escribirlo
};

const thomas: Person = {
    id: 289134, //! id NO SE PUEDE CAMBIAR, NICKNAME no está porque es opcional
    first: "Thomas",
    last: "Hardy",
    sayHi: () => "hello!",
}


interface Product1 {
    name: string,
    price: number,
    applyDiscount(discount: number): number; //! este metodo pide UN parametro, que tendra que ser de tipo number, y devolvera RETURN algo tipo number
};

const shoes: Product1 = {
    name: "Blue suede shoes",
    price: 100,
    applyDiscount(tax: number) {
        return this.price * tax;
    }
}

// las interfaces pueden abrirse en cualquier parte del script para añadir propiedades nuevas
interface Dog {
    name: string,
    age: number
};
// aqui volvemos a abrir la misma interfaz para añadir otras propiedades
interface Dog {
    breed: string,
    bark(): string
};


const titan: Dog = {
    name: "Titan",
    age: 1,
    breed: "Terrier",
    // bark () {return "bark"}, //! las dos maneras son correctas
    bark: () => "bark"
};

// tambien se puede crear una interfaz que herede todas las propiedades de otras interfaces

interface ServiceDog extends Dog {
    readonly id: number,
    job: "drug sniffing" | "bomb detector" | "guide"
}

const elton: ServiceDog = {
    name: "Elton",
    age: 1,
    breed: "Collie",
    bark: () => "bark bark",
    id: 2940410,
    job: "bomb detector"
};

