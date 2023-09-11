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
// si fuese una propiedad private como en la linea 11, solo se podría acceder a esa propiedad dentro de la misma clase y ni las clases hijas que vienen pueden hereditar, con la palabra protected las clases hijas pueden hereditar pero sigue sin ser publica.
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
class masterVillain extends Opponent {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this.score = 9999;
    }
}
const opponent = new Opponent("Alexis", "Garcia");
console.log(opponent);
console.log(opponent.fullName);
opponent.fullName = "Hikaru";
console.log(opponent.fullName);
;
;
class Bike {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`Building a ${this.brand} with ${this.color} color…`);
    }
}
;
const kawasaki = new Bike("green", "Kawasaki");
// las abstract clases son como las intefaces en el sentido en el que las instancias deben contener las propiedades abstractas, con la diferencia de que tambien van a poder incluir metodos que SI van a hereditar las instancias.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hello, I'm ${this.first} ${this.last}`);
    }
}
;
// si no se incluyen las clases con las propiedades abstractas TypeScript se quejara
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    ;
    getPay() {
        console.log(`${this.salary}€`);
    }
}
;
// el metodo greet ya esta heredado, por lo que aunque no especificado en fulltimeemployee, sigue funcionando. Sin embargo el metodo getPay DEBE declararse, ya que en una abstracción (no existe per se en la clase padre pero fuerza a las hijas a tenerlas)
const alexis = new FullTimeEmployee("Alexis", "Garcia", 1500);
alexis.greet();
alexis.getPay();
