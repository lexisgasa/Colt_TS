// ========================================================================
// ===============            VERSION LARGA            ====================
// ========================================================================
class Player {
  // los parametros que se van a usar en el constructor se tienen que crear primero y especificar el tipo de dato que es, en el constructor tambien se especifica el tipo de dato que son los parametros
  // con las propiedades readonly, una vez se cree una instancia esas propiedades no van a ser modificables //! EN TYPESCRIPT
  // lo que este en public se podra acceder desde afuera, todo es public default, lo que este en private no saldra como sugerencia EN TYPESCRIPT (a fuerza bruta se puede modificar ya que no afecta en javascript)
  public readonly name: string;
  private readonly lastName: string;
  // ! si :number no se usa, typescript inferira el tipo igualmente
  private score: number = 0;

  constructor(first: string, last: string) {
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
  protected score: number = 0;

  constructor(public name: string, private last: string) {}

  // los getters se escriben igual que en JavaScript, TypeScript puede inferir el tipo de dato que se retorna pero tambien se puede anotar implicitamente
  get fullName(): string {
    return `${this.name} ${this.last}`;
  }
  set fullName(change: string) {
     this.name = change;
  }
}

class masterVillain extends Opponent {
  isAdmin: boolean = true;
  maxScore () {
    this.score = 9999;
  }
}

const opponent = new Opponent("Alexis", "Garcia");
console.log(opponent)
console.log(opponent.fullName)
opponent.fullName = "Hikaru";
console.log(opponent.fullName)


// las interfaces se pueden conectar con las clases para que las instancias creadas de las clases estén forzadas a tener que usar las propiedades de las interfaces
interface Color {
  color: string;
};
interface Brand {
  brand: string;
};
class Bike implements Color, Brand {
  constructor(public color: string, public brand: string) {}
  print() {
    console.log(`Building a ${this.brand} with ${this.color} color…`)
  }
};
const kawasaki = new Bike("green", "Kawasaki");



// las abstract clases son como las intefaces en el sentido en el que las instancias deben contener las propiedades abstractas, con la diferencia de que tambien van a poder incluir metodos que SI van a hereditar las instancias.
abstract class Employee{
  constructor(public first: string, public last: string){}
  abstract getPay(): void;
  greet():void {
    console.log(`Hello, I'm ${this.first} ${this.last}`)
  }
};
// si no se incluyen las clases con las propiedades abstractas TypeScript se quejara
class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number){
    super(first, last)
  };
  getPay(): void {
    console.log(`${this.salary}€`);
  }
};

// el metodo greet ya esta heredado, por lo que aunque no especificado en fulltimeemployee, sigue funcionando. Sin embargo el metodo getPay DEBE declararse, ya que en una abstracción (no existe per se en la clase padre pero fuerza a las hijas a tenerlas)
const alexis = new FullTimeEmployee("Alexis", "Garcia", 1500)
alexis.greet();
alexis.getPay();
