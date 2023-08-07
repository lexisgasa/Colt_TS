// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string,
    price: number
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal( products: Product[] ): number{
    let total = 0;
    products.map(item => total += item.price)
    return total;
}



// para testeaer creamos un array random con precios diferentes
const products: Product[] = [
    {
        name: "asd",
        price: 1
    },
    {
        name: "asd",
        price: 2
    },
    {
        name: "asd",
        price: 3
    },
    {
        name: "13d",
        price: 4
    },
];
// y el console.log da el return total, que en este caso es 10
console.log(getTotal(products))


// con un loop en vez de un map
function getTotalLoop(products: Product[]): number{
    let total = 0;
    for (let product of products) {
        total += product.price
    }
    return total;
}

console.log(getTotalLoop(products));