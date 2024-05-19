const identity = (arg: string | number | boolean) => {
    return arg
}
console.log(identity(7));
console.log(identity("string"));
console.log(identity(true));
const x = identity(true)
//console.log(x+7);

const identity1 = <T>(arg: T) => {
    return arg
}
console.log(identity1(typeof (7)));
console.log(identity1(typeof ("string")));
console.log(identity1(typeof (true)));
const nam = identity1(typeof ("janaki"))
console.log(typeof (nam + 7))

//understand generics by below example

export abstract class shape<T> {
    properties: T
    constructor(properties: T) {
        this.properties = properties
    }
    abstract calculateArea(): number
}

interface circleProperties {
    radius: number
}
interface squareProperties {
    side: number
}
class Circle extends shape<circleProperties> {
    calculateArea(): number {
        return Math.PI * this.properties.radius ** 2
    }
}
class Square extends shape<squareProperties> {
    calculateArea(): number {
        return this.properties.side ** 2
    }
}
interface RectProperties {
    l: number,
    b: number
}
class Rectangle extends shape<RectProperties> {
    calculateArea(): number {
        return this.properties.l * this.properties.b
    }
}
const circle: Circle = new Circle({ radius: 6 })
const square: Square = new Square({ side: 6 })
const rectangle: Rectangle = new Rectangle({ l: 6, b: 2 })

console.log(circle.calculateArea())
console.log(square.calculateArea())
console.log(rectangle.calculateArea())
