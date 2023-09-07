"use strict";
// ========================================================================
// ===============            VERSION LARGA            ====================
// ========================================================================
class Player {
    constructor(first, last) {
        // ! si :number no se usa, typescript inferira el tipo igualmente
        this.score = 0;
        (this.name = first), (this.lastName = last);
    }
}
const elton = new Player("Elton", "Steele");
/*
elton.name = "Andrew" //! TS error ya que el name esta en readonly
elton.lastName = "Iron"  //! lastname sera Iron, aunque .lastName no sera una sugerencia y mas bien una queja
*/
// ========================================================================
// ===============            VERSION CORTA            ====================
// ========================================================================
// para hacerlo corto no hace falta declarar los paramatros que se van a usar y su funcion en el constructor, declarado unicamente como parametro del constructor, de manera implicita los declarara automaticamente cuando se haga la nueva instancia. // ? el orden de los parametros coincide, ergo en este caso lo primero que se escriba sera el name y lo segundo el last
class Opponent {
    constructor(name, last) {
        this.name = name;
        this.last = last;
        this.score = 0;
    }
    // los getters se escriben igual que en JavaScript, TypeScript puede inferir el tipo de dato que se retorna pero tambien se puede anotar implicitamente
    get fullName() {
        return `${this.name} ${this.last}`;
    }
    set fullName(change) {
        this.name = change;
    }
}
const opponent = new Opponent("Alexis", "Garcia");
console.log(opponent);
console.log(opponent.fullName);
opponent.fullName = "Hikaru";
console.log(opponent.fullName);
