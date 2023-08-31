"use strict";
class Player {
    constructor(first, last) {
        // ! si :number no se usa, typescript inferira el tipo igualmente
        this.score = 0;
        this.name = first,
            this.lastName = last;
    }
}
const elton = new Player("Elton", "Steele");
/*
elton.name = "Andrew" //! complain if changed since its a readonly property
elton.lastName = "Iron"  //! lastname will be iron
*/
