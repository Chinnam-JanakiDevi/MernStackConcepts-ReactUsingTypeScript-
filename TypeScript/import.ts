import { shape } from "./generics";
interface circleProperties{
    radius:number
}
interface squareProperties{
    side:number
}
class Circle extends shape<circleProperties>{
    calculateArea(): number {
        return Math.PI*this.properties.radius**2
    }
}
class Square extends shape<squareProperties>{
    calculateArea(): number {
        return this.properties.side**2
    }
}
interface RectProperties{
    l:number,
    b:number
}
class Rectangle extends shape<RectProperties>{
    calculateArea():number{
        return this.properties.l*this.properties.b
    }
}
const circle:Circle=new Circle({radius:6})