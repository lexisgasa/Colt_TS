"use strict";


class Player {
    // ! podemos poner propiedades que tengan de default y que todas las intancias que se creen de esta clase las hereden
    #score = 0; //! con el # se hace una propiedad privada
    numLives = 10;
    // ! el constructor es una funcion que se llamara en cuanto se cree la clase, se usa normalmente para obtener data en los argumentos
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    // ! los metodos son funciones sin mas, cada vez que se llame esa instancia en especifico restara del parametro, recuerda que los metodos se pueden tambien escribir con una funcion de flecha -----  loseLife = () => this.numLives -= 1;
    loseLife() {
        return this.numLives -= 1;
    }
    // ! utilizando propiedades privadas, en este caso el score
    getScore () {
        return this.#score;
    }
    // ! los getters son metodos pero que actuan como propiedades y no funciones per se, por tanto para llamarles no hace falta invocarlas () ---- player1.fullName  seria suficiente
    get fullName() {
        return `${this.name} ${this.lastName}`
    };
    set fullName(trollingName){
        if ( typeof trollingName != "string" )  throw new Error ("Name must be a string!");
        this.name = trollingName;
    };
    // ? el siguiente getter y setter obtiene el nombre entero igual que el anterior, pero el setter espera un nuevo value que probablemente este compuesto por 2 o 3 palabras, especificamos que la cadena va a cortar cada palabra (donde hay un espacio) con el metodo split, y desestructuramos el array para que coja cada argumento, el primero con el nombre de first, el segundo con last, el tecero con secondLast, aplicamos la logica del setter que si el secondLast es un string (esto significa que  se ha insertado un nombre ya que si no daria undefined) se crea una propiedad para el objeto per se, sino, actualiza los primeros
    get changeName(){
        return `${this.name} ${this.lastName}`
   };
    set changeName(newName) {
        if ( typeof newName !== "string" ) throw new Error("New value must be a string!")
        const [first, last, secondLast] = newName.split(" ");
        this.name = first;
        this.lastName = last;
        secondLast ? this.secondLastName = secondLast : this.secondLastName = undefined;
   };

   //! las propiedades que van con la palabra static no se heredaran a ninguna instancia, solo se podran acceder a ellas a traves de la clase per se, description solo se podra acceder a traves de Player y no de player1
   static description = "A player in the game"
}

const player1 = new Player("Alex", "Garcia");