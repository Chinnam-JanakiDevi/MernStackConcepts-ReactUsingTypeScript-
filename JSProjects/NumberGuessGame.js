sec_num=Math.floor(Math.random()*100);
console.log(sec_num);
attempts=5;
i=0;
alert("You have only 5 attempts to guess the number correctly. Use your guesses wisely!")
do{
    i+=1;
    num=prompt("attempt - "+i+" enter your guess number");
    if(attempts==1){
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
}while(attempts>0)