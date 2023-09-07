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
  public score: number = 0;

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
class Opponent {
  public score: number = 0;

  constructor(public name: string, private last: string) {}

  // los getters se escriben igual que en JavaScript, TypeScript puede inferir el tipo de dato que se retorna pero tambien se puede anotar implicitamente
  get fullName(): string {
    return `${this.name} ${this.last}`;
  }
  set fullName(change: string) {
     this.name = change;
  }
}

const opponent = new Opponent("Alexis", "Garcia");
console.log(opponent)
console.log(opponent.fullName)
opponent.fullName = "Hikaru";
console.log(opponent.fullName)