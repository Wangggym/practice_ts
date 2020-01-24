enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum Responses {
    No = 0,
    Yse = 1
}


function respond(recipient: string, message: Responses): void {

}

respond("Princess Caroline", Responses.Yse)

console.log(Responses[2])