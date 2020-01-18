// 接口

interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object' }

printLabel(myObj)


//  可选属性
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ opacity: 0.5, width: 100 })

// 只读属性

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 }
p1.x = 5


let a: number[] = [1, 2, 3, 4, 5]
let ro: ReadonlyArray<number> = a
ro[1] = 12
ro.push(5)
ro.length = 100
a = ro

a = ro as number[]


// 函数类型
interface SearchFunc {
    (source: string, substring: string): boolean
}


let mySearch: SearchFunc = function (src: string, sub: string) {
    let result = src.search(sub)
    return result > 1
}


// 可索引类型

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}



















