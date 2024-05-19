principle = 5000
rate = 5
time = 3
si = principle * time * rate / 100;
console.log(`Simple Interest is ${si}`);
console.log('c'.repeat(3));
console.log(Array(4).join('c'));

age = 0
if (age = 0) {
    console.log("eligible");
}
else {
    console.log("not eligible");
}

obj = { a: 1, b: 2, c: 3 }
for (t in obj) {
    console.log(t);
}

obj1 = [1, 2, 3];
for (t of obj1) {
    console.log(t);
}

obj1.forEach(function (x) {
    console.log(x);
})


document.getElementById('toggleButton').addEventListener('click', function() {
    const inputField = document.getElementById('myInput');
    if (inputField.type === 'hidden') {
        inputField.type = 'text'; // Change to visible
    } else {
        inputField.type = 'hidden'; // Change to hidden
    }
});

// mass=parseFloat(prompt("enter your weight in kg "));
// height=parseFloat(prompt("enter your height in cm"));
// bmi=mass/((height/100)**2);
// if(bmi<18.5){
//     alert("you are underweight"+bmi);
// }
// else if(bmi<25){
//     alert("normal"+bmi);
// }
// else{
//     alert("you are obese"+bmi);
// }

//BMICalaculator
let start = ' ';
do {
    mass = parseFloat(prompt("enter your weight in kg "));
    height = parseFloat(prompt("enter your height in cm"));
    bmi = mass / ((height / 100) ** 2);
    if (bmi < 18.5) {
        alert("you are underweight" + bmi);
    }
    else if (bmi < 25) {
        alert("normal" + bmi);
    }
    else {
        alert("you are obese" + bmi);
    }
    start = prompt("enter yes or no to continue");
}
while (start == "yes") 


//number guess game
sec_num=Math.floor(Math.random()*100);
console.log(sec_num);
attempts=5;
i=0;
alert("You have only 5 attempts to guess the number correctly. Use your guesses wisely!")
do{
    i+=1;
    num=prompt("attempt - "+i+" enter your guess number");
    if(attempts==0){
        alert("Game over! The correct number was "+sec_num);
    }
    else{
    if(num==sec_num){
        // console.log("correct");
        alert("Congratulations! You've guessed the number!");
        break;
    }
    else if(num>sec_num){
        console.log("choose small number");
        alert("The number is high")
    }
    else if(num<sec_num){
        console.log("choose a high number");
        alert("The number is low")
    }
    }
    attempts-=1;
}while(attempts>-1)


