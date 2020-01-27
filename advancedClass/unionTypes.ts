function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }

    throw new Error(`Expected string or number, got ${padding}`)
}

padLeft('Hello world', 4)

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    return null
}

let pet = getSmallPet()
pet.layEggs();
pet.swim()

if ((pet as Fish).swim) {
    (pet as Fish).swim()
} else if ((<Bird>pet).fly) {
    (<Bird>pet).fly()
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined
}

if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}