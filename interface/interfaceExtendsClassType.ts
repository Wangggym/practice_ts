// 接口继承类

class Control {
    private state: any;
}

interface SelectabelControl extends Control {
    select(): void;
}

class Button extends Control implements SelectabelControl {
    select() { }
}

class TextBox extends Control {

}

const button = new Button()
const textbox = new TextBox()

console.log(button)
console.log(textbox)


