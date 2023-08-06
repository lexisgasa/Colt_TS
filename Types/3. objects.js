"use strict";
// esta funcion tiene como parametro un objeto que se compone de "first" y de "last", ambos deben de ser strings o dara error
// aunque ts infiere automaticamente que es de tipo void ya que es un console.log, no esta de mas anotarlo
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
;
printName({ first: "Thomas", last: "Jenkins" });
// es poco comun hacerlo de la siguiente forma, pero tambien es posible crear una variable e indicar los de que tipo seran sus keys
let coordinate = { x: 34, y: 5 };
let coordinate2 = { x: 1, y: 99 };
// hacemos dos funciones random, una que calcule el la ganancia por reproduccion y otra que el titulo y el artista
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
;
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
;
// cogemos el objeto cancion como tal
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123455,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
// ambas funciones se pueden llamar ya que se pasan los parametros, aunque en este caso en las funciones no se usen los creditos, si faltaran TS se quejaria
calculatePayout(mySong);
printSong(mySong);
const myPoint = {
    x: 5,
    y: 20,
    z: 25 // -> si no ponemos Z, ts no se va a quejar
};
const user = {
    id: 1234,
    username: "catgril"
};
console.log(user.id);
const happyFace = {
    radius: 4,
    color: "yellow"
};
