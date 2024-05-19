var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.obj = "janaki";
        console.log(this.obj);
    }
    Animal.prototype.getAge = function () {
        console.log(this.age);
    };
    Animal.prototype.speak = function () {
        console.log("animal speaka");
    };
    Animal.sayHi = function () {
        console.log("static method");
        // this.age=13   not possible 
        this.animalType = "cat"; //possible
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.getLegs = function () {
        console.log(this.noOfLegs);
    };
    Mammal.prototype.speak = function () {
        console.log("mammal speaks");
    };
    return Mammal;
}(Animal));
var cow = new Mammal();
var cat = new Mammal();
var dog = new Mammal();
Animal.animalType = "cat";
cow.age = 12;
cow.getAge();
cat.age = 14;
cat.getAge();
dog.age = 16;
dog.getAge();
cow.noOfLegs = 30; //method-1
cow.getLegs();
cow.speak();
