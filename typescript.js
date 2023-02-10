//boolean
var isCool = true;
//number
var age = 56;
//String
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only ".concat(age);
//Array
var pets = ['Dogs', 'Cats', 'Sheep'];
var pet2 = ['Lion', 'Dog', 'Liger'];
//Object
var wizard = {
    a: 'John'
};
//null
var data = undefined;
var promise = null;
//Tuple (Accepts array of different types IN ORDER)
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
})(Size || (Size = {}));
var sizeName = Size[2];
//Any (Accepts any type but defeats the purpose of typescript)
var whatever = 'Any type stuff !';
whatever = basket;
//Void (Function that does not return anything)
var sing = function () {
    console.log("do do do");
};
// Never (No return and does not have a reachable endpoint)
var error = function () {
    throw Error('oops');
};
var fightArmy = function (soldiers) {
    console.log(soldiers);
};
var newDoctors = {};
newDoctors.count;
//Function
var fightArmy2 = function (soldiers) {
    console.log("Action");
};
var fightArmy4 = function (soldiers) {
    console.log("Action");
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('roar');
lion.greet();
//Union
var confused = true;
