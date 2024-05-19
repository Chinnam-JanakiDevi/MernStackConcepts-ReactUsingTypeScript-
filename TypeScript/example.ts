//run using ==>2 commands
//     .\node_modules\.bin\tsc inheritance.ts
//       node inheritance.js

// const num1: number = 10;
// const num2 = 20;
// const sum = num1 + num2;
// console.log(`sum is ${sum}`);



var calculateSum = () => {
    const num1: HTMLInputElement = document.getElementById("num1") as HTMLInputElement;
    const num2: HTMLInputElement = document.getElementById("num2") as HTMLInputElement;
    const res: HTMLElement = document.getElementById("result") as HTMLElement;
    const sum = parseInt(num1.value) + parseInt(num2.value)
    // res.innerText = `sum is ${sum.toString()}`
    res.innerText = sum.toString()

}

let nums: number | String = "janaki"
nums = 10
let x1: any = "janaki"
x1 = 20

const addi = (a: number, b: number) => {
    return a + b;
}
console.log(addi(2, 3))

let isAdult: boolean = true;
isAdult = false
