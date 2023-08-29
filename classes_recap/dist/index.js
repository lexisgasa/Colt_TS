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
    }
   
}

const player1 = new Player("Alex", "Garcia");

