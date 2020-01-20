// public

// class Animals {
//     private name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m`)
//     }
// }

// new Animals('Cat').name

// class Animals {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animals {
//     constructor() { super("Rhino"); }
// }

// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animals("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino;
// animal = employee; // 错误: Animals 与 Employee 不兼容.

// 理解 protected

class Person {
    protected name: string;
    protected constructor(name: string) { this.name = name; }
}

class Employees extends Person {
    private department: string;
    constructor(name: string, department: string) {
        
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employees('Howards', 'Sales')
let john = new Person('John');
console.log(howard.getElevatorPitch)
console.log(howard.name)
