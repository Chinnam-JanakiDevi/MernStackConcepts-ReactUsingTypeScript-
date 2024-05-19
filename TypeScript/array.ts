const myArr: number[] = [1, 2, 3, 4, 5];
myArr[2] = 10
console.log(myArr);


const person = {
    names: "xyz",
    roll: 34,
    address: {
        city: "nrt",
        state: "ap"
    }
}

enum AppStage {
    INIT,
    PAYMENT_DONE,
    TEST_DONE,
    FINISHED
}

const currentStage: AppStage = AppStage.INIT
console.log(currentStage); //0 -> 0 is index

class MyPerson {
    name: string = "janaki"
}
const myperson: MyPerson = new MyPerson()
console.log(myperson.name);

