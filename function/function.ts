// Named function
function add(x: number, y: number): number {
    return x + y;
}

let z = 100;

// Anonymous function
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y + z
}