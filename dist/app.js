function logger(target, name, description) {
    console.log(target);
    console.log(name);
    console.log(description);
    return description;
}
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'monkey';
    }
    Animal.prototype.walk = function () {
        console.log(this.name + 'is walking');
    };
    return Animal;
}());
var an = new Animal();
an.walk();
