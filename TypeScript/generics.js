"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
var identity = function (arg) {
    return arg;
};
console.log(identity(7));
console.log(identity("string"));
console.log(identity(true));
var x = identity(true);
//console.log(x+7);
var identity1 = function (arg) {
    return arg;
};
console.log(identity1(typeof (7)));
console.log(identity1(typeof ("string")));
console.log(identity1(typeof (true)));
var nam = identity1(typeof ("janaki"));
console.log(typeof (nam + 7));
//understand generics by below example
var shape = /** @class */ (function () {
    function shape(properties) {
        this.properties = properties;
    }
    return shape;
}());
exports.shape = shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.properties.radius, 2);
    };
    return Circle;
}(shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.calculateArea = function () {
        return Math.pow(this.properties.side, 2);
    };
    return Square;
}(shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.properties.l * this.properties.b;
    };
    return Rectangle;
}(shape));
var circle = new Circle({ radius: 6 });
var square = new Square({ side: 6 });
var rectangle = new Rectangle({ l: 6, b: 2 });
console.log(circle.calculateArea());
// console.log(square.calculateArea())
// console.log(rectangle.calculateArea())
