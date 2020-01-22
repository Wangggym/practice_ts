// 可选和默认参数
function buildName(firstName: string, lastName: string = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName('Bob');
let result2 = buildName('Bob', 'Adams', 'Sr.');
let result3 = buildName('Bob', 'Adams');

