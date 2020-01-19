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




// 类类型

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d
//     }
//     constructor(h: number, m: number) {

//     }

// }

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(parameters) {

    }
    tick() {
        console.log('beep beep')
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }

    tick() {
        console.log('tick tick')
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

// 继承接口

// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// let square = <Square>{};
// square.color = 'blue';
// square.sideLength = 12


// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}


let square = {} as Square;
square.color = 'yellow';
square.penWidth = 10;
square.sideLength = 10;































