// Type annotation
// strings
var movieTitle = "The Illusionist";
movieTitle = "Interstellar";
// movieTitle = 4 // ? gives error since typescript expects a string
// numbers
var successValue = 60;
successValue = 50;
// booleans
var gameOver = false;
gameOver = true;
// const
var awesomeString = "I'm awesome!";
// awesomeString = "Not awesome anymore"; // ? gives error
// Type Inference
var tvShow = "Famiy Guy";
// tvShow = 4 // ? gives error since TS expects a string, automatically assigned in variable declaration
// Any type
var thing = "Hello";
thing = 1;
thing = false;
