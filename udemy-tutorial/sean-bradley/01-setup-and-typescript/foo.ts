interface person{
    quuy: string
    quuz: number
}

// assigning bar to type of string
// the user can't pass a variable unless its a string
// the user can optionally pass zar but only if its a number
function foo(bar:string, age?:number, bop ?: person){
    if (age != null){
        return "Hello, " + bar + ` You are ${age} years old!`
    } else if (bop != null ){
        return "Hello, " + bop.quuy + bop.quuz
    } else {
        return bar
    }
}

class Grault {
    private garply: string

    constructor(quux: Quux, waldo: number[]) { 
        this.garply = quux.quuz + " " + quux.corge + " " + waldo
    }

    public getGarply(){
        return this.garply
    }
}

interface Quux {
    quuz: string;
    corge: number;
}

let baz = { quuz: "ABC", corge: 123 };

let fred: Grault = new Grault(baz, [1,2,3])

console.log(fred.getGarply());

let sbt = "class of Sean Bradley & Typescript!"
let age = 43
let john : person = { quuy: "johnsmith", quuz: 43}


// The user optionally can pass car but only because it is a string containing the word car
console.log(foo(sbt))

try {
    document.body.innerHTML = fred.getGarply()
} catch (e) { }