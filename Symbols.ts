let sym1 = Symbol();
let sym2 = Symbol("key")

console.log(sym1 === sym2)
let obj = {
    [sym1]: "value"
}

console.log(obj[sym1])
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"