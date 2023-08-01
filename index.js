// 1
let converter = (weight) => {
    console.log(weight * 0.453592)
}
converter(150)


let distanceConverter = (distance) => {
    console.log(distance * 6.21)
}
distanceConverter(10)

let area = (c, h) => {
    console.log((c*h)/2)
}
area(10,5)

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let current = 0;
numbers.forEach( val => {
    if (val >= current){
        current = val
    }
})
console.log(current)