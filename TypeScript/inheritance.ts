class Animal {
    static animalType: string //static variable can be accesed using class name
    age: number
    readonly obj: string //cant change variable
    constructor() {
        this.obj = "janaki"
        console.log(this.obj);
        
    }
    getAge() {
        console.log(this.age);
    }
    speak() {
        console.log("animal speaka");
    }
    static sayHi() {
        console.log("static method");
        // this.age=13   not possible 
        this.animalType = "cat" //possible
    }
}

class Mammal extends Animal {
    noOfLegs: number
    getLegs() {
        console.log(this.noOfLegs);
    }
    speak() {
        console.log("mammal speaks");
    }
}

const cow: Animal = new Mammal()
const cat: Animal = new Mammal()
const dog: Animal = new Mammal()
Animal.animalType = "cat"

cow.age = 12;
cow.getAge();

cat.age = 14;
cat.getAge();

dog.age = 16;
dog.getAge();

(cow as Mammal).noOfLegs = 30;//method-1
(<Mammal>cow).getLegs()
cow.speak()
