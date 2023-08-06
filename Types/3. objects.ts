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


// para objetos anidados más de lo mismo
// en este caso definimos la estructura primero
type Song = {
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: {
        producer: string, 
        writer: string
    }
}

// hacemos dos funciones random, una que calcule el la ganancia por reproduccion y otra que el titulo y el artista
function calculatePayout( song: Song  ): number{
    return song.numStreams*0.0033
};
function printSong(song: Song): void{
    console.log(`${song.title} - ${song.artist}`)
};

// cogemos el objeto cancion como tal
const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123455,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}
// ambas funciones se pueden llamar ya que se pasan los parametros, aunque en este caso en las funciones no se usen los creditos, si faltaran TS se quejaria
calculatePayout(mySong);
printSong(mySong);


// las propiedades pueden ser tambien opcionales, en este ejemplo haremos un punto que tenga dos coordenadas y una opcional si fuera tridimensional
type TridimensionalPoint = {
    x: number,
    y: number,
    z?: number
};

const myPoint: TridimensionalPoint = {
    x: 5,
    y: 20,
    z: 25 // -> si no ponemos Z, ts no se va a quejar
};

// si añadimos read-only, modificarlo dará error
type User = {
    readonly id: number,
    username: string
};

const user: User = {
    id: 1234,
    username: "catgril"
};

console.log(user.id)
// user.id = 2431; -> da error porque esta en read only

// se pueden combinar diferentes tipos en uno
type Circle = {
    radius: number;
};
type Color = {
    color: string
};
type ColorfulCircle = Circle & Color;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow" 
}