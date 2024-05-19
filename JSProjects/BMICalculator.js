// let start = ' ';
// do {
//     mass = parseFloat(prompt("enter your weight in kg "));
//     height = parseFloat(prompt("enter your height in cm"));
//     bmi = mass / ((height / 100) ** 2);
//     if (bmi < 18.5) {
//         alert("you are underweight" + bmi);
//     }
//     else if (bmi < 25) {
//         alert("normal" + bmi);
//     }
//     else {
//         alert("you are obese" + bmi);
//     }
//     start = prompt("enter yes or no to continue");
// }
// while (start == "yes") 
const massInput = document.getElementById("mass");
const heightInput = document.getElementById("height");
const res = document.getElementById("result");
const errors = document.getElementById("error")
const clock = document.getElementById("clock");

//providing validation
const valInput = () => {
    res.innerText = "";
    if (massInput.value === "") {
        // alert("provide mass");
        errors.innerText = "provide mass"
        return false;
    }
    if (! /\d+/.test(heightInput.value)) {
        errors.innerText = "provide height"

        return false;
    }
    return true;
}
//calculate BMI
const calculate = () => {
    mass = parseFloat(massInput.value);
    height = parseFloat(heightInput.value);
    console.log(mass, height);
    bmi = mass / ((height / 100) ** 2);
    console.log(bmi);
    if (bmi < 18.5) {
        res.innerText = "you are underweight " + bmi.toFixed(2);

    }
    else if (bmi < 25) {
        res.innerText = "normal " + bmi.toFixed(2);
    }
    else {
        res.innerText = "you are obese " + bmi.toFixed(2);
    }
}

//To understand setTimeout and setInterval
let clockCounter = 0;
const updateClock = () => {
    clock.innerHTML = clockCounter;
    clockCounter++;
}
// setInterval(updateClock, 1000);

const welcomeMsg = () => {
    alert("welcome");
}
setTimeout(welcomeMsg, 1000);

