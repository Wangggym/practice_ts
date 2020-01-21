//  布尔值
let isDone: boolean = false

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;


// 字符串

let names: string = "bob"
names = "smith"


// 数组
var list: number[] = [1, 2, 3]
var list: Array<number> = [1, 2, 3]

// 元组 Tuple

let x: [string, number];
x = ['hello', 10]

const tuple = <T extends string[]>(...args: T) => args;
const buttonTypes = tuple('default', 'primary')
type ButtonType = typeof buttonTypes[number];


console.log(x[0].substr(1));
console.log(x[1].valueOf())

// 枚举 enum

enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green
let className: string = Color[2]
console.log(c, className)


// Any
let notSure: any = 4;
notSure = 'maybe a string instead'
notSure = false
notSure.ifItExists();
notSure.toFixed();
let prettySure: Object = 4
prettySure.toFixed()

let list: any[] = [1, true, 'false']
list[1] = 100

// Void 

function warnUser(): void {
    console.log('this is my warning message')
}

let unusable: void = undefined

// Null & undefined

let u: undefined = undefined
let n: null = null


// Never 
function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error("Something failed")
}

// Object

declare function create(o: object | null): void

create({ prop: 0 }); // OK
create(null); // OK

// 类型断言

let someValue: any = 2
let strLength: number = (<string>someValue).length
let someValueLength: number = (someValue as string).length




