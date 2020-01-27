interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ")
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder("  ")
}

let padder: Padder = getRandomPadder()

if (padder instanceof SpaceRepeatingPadder) {
    padder
}

if (padder instanceof StringPadder) {
    padder
}

let s = 'foo';
s = null


function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '. the ' + epithet
    }
    name = name || 'Bob';
    return postfix("great")
}

type Name = string;
type NameResolver = () => string;
type NameorResolver = Name | NameResolver

function getName(n: NameorResolver): Name {
    if (typeof n === 'string') {
        return n
    }
    else {
        return n()
    }
}

