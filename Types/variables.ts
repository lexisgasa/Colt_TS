// Type annotation
// strings
let movieTitle: string = "The Illusionist";
movieTitle = "Interstellar";
// movieTitle = 4 // ? gives error since typescript expects a string

// numbers
let successValue: number = 60;
successValue = 50;

// booleans
let gameOver = false;
gameOver = true;

// const
const awesomeString: string = "I'm awesome!";
// awesomeString = "Not awesome anymore"; // ? gives error




// Type Inference
let tvShow = "Famiy Guy"
// tvShow = 4 // ? gives error since TS expects a string, automatically assigned in variable declaration



// the "any" type
let thing: any = "Hello";
thing = 1;
thing = false;

