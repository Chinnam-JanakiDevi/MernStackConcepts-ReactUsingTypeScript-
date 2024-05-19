abstract class Vehicle{
    abstract drive()
    implementedMethod(){
        console.log("we can implement methods also");
        
    }
}
class Bycycle extends Vehicle{
    drive() {
        console.log("overrided");
    }
}

const bike:Vehicle=new Bycycle()
bike.drive()

interface Person{
    name1:string,
    age:number
    greet()
}

interface Student extends Person{
    roll:number
}

const student:Student={
    name1:"janaki",
    age:20,
    roll:80,
    greet(){
        
    }
}