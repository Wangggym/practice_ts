function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id]
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result
}

class Person {
    constructor(public name: string) {

    }
}

interface loggable {
    log(): void
}

class ConsoleLogger implements loggable {
    log(): void {
        throw new Error("Method not implemented.");
    }

}

var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
jim.log()


type Alias = { num: number }
interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface


type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        } else if (easing === "ease-out") {

        } else if (easing === "ease-in-out") {

        } else {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') 

function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
}