class Player {
    // ! con las propiedades readonly, una vez se cree una instancia esas propiedades no van a ser modificables
    // ! los parametros que se van a usar en el constructor se tienen que crear primero o dara error
    // ! todo lo que este en public se podra acceder desde afuera
    public readonly name: string;
    private readonly lastName: string;
    // ! si :number no se usa, typescript inferira el tipo igualmente
    public score: number = 0;

    constructor(first: string, last: string) { //! anotacion de tipo en cuanto a los argumentos que recibira 
        this.name = first,
        this.lastName = last;
    }
}

const elton = new Player("Elton", "Steele");
/*
elton.name = "Andrew" //! complain if changed since its a readonly property
elton.lastName = "Iron"  //! lastname will be iron
*/
