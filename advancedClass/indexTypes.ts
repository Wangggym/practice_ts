function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n])
}

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Jarid',
    age: 24
}

let string: string[] = pluck(person, ['name'])

let personProps: keyof Person;

pluck(person, ['name', 'age'])

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}

let namen: string = getProperty(person, 'name');
let age = getProperty(person, 'age');