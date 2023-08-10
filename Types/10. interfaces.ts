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
    nickname?: string;
};

const thomas: Person = {
    id: 289134, //! id NO SE PUEDE CAMBIAR, NICKNAME no está porque es opcional
    first: "Thomas",
    last: "Hardy"
}