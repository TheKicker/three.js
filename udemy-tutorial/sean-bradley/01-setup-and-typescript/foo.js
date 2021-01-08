// assigning bar to type of string
// the user can't pass a variable unless its a string
// the user can optionally pass zar but only if its a number
function foo(bar, age, bop) {
    if (age != null) {
        return "Hello, " + bar + (" You are " + age + " years old!");
    }
    else if (bop != null) {
        return "Hello, " + bop.quuy + bop.quuz;
    }
    else {
        return bar;
    }
}
var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var baz = { quuz: "ABC", corge: 123 };
var fred = new Grault(baz, [1, 2, 3]);
console.log(fred.getGarply());
var sbt = "class of Sean Bradley & Typescript!";
var age = 43;
var john = { quuy: "johnsmith", quuz: 43 };
// The user optionally can pass car but only because it is a string containing the word car
console.log(foo(sbt));
try {
    document.body.innerHTML = fred.getGarply();
}
catch (e) { }
