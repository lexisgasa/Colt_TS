// los arrays se marcan con el tipo de data que va a contener el array, aunque se inicialice vacio
const ageList: number[] = [1,2,3];

const activeUsers: string[] = [];

// al hacerlo asi, cambiar el tipo de dato o pushear valores nuevos no dara errores
ageList[0] = 5;
// ageList[0] = "Hello world" // ! Esto dara error

activeUsers.push("Hello world")
console.log(activeUsers)


// el array tambien se puede definir con la sintaxis Array<data type>
// ! Array va con la mayuscula o dara error
const booleanos: Array<boolean> = [true]

// podemos hacer array de los Types
type Coord = {
    x: number,
    y: number
};
const coords: Coord[] = [
    {
        x: 25,
        y:3
    },
    // { // ! esto dara error porque falta el valor y
    //     x:1
    // }
]

// arrays multidimensionales solo tienen que especificarse al iniciarse cuantos arrays van a haber, y el tipo de dato que va a contener dentro
const board: string[][] = [
    ["X","X","O"],
    ["O","O","X"],
    ["X","O","X"],
]