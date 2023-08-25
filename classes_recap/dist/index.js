class Player {
    score = 0;
    numLives = 5;
    constructor (name, lastName) {
        this.name = name,
        this.lastName = lastName
    }
    taunt () {
        console.log("BOOYAH!")
    };
    // taunt = () => { console.log("first") } //! dos maneras de declarar metodos con la palabra funcion, que puede ser omitida, o funciones de flecha
    greet(){
        console.log(`Hey there, this is ${this.name} ${this["lastName"]}`)
    };
    loseLife(){
        this.numLives -= 1;
    };
}

const player1 = new Player("Henry","Muller");
player1["taunt"]() //! notacion en bracket
player1["greet"]()
const player2 = new Player();
player1.taunt() //! notacion de bracket o de punto


