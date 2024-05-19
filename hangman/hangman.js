
const hint = document.querySelector(".hint b")
const word = document.getElementById("word")
const keyboard = document.getElementById("keyboard")
const timerElement = document.getElementById('timer');
const gameModel = document.getElementById('modal');
const gameModel1 = document.getElementById("p");

// const startButton = document.getElementById("start-button");
// const gameContainer = document.querySelector(".container");

wordsToGuess = [
   ['apple', 'a fruit'],
   ['elephant', 'an animal'],
   ['vijaywada', 'a city']
]

let startTime;
let timerInterval;

function startTimer() {
   startTime = Date.now();
   timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
   const elapsedTime = Date.now() - startTime;
   const seconds = Math.floor(elapsedTime / 1000);
   timerElement.textContent = formatTime(seconds);
}

function formatTime(seconds) {
   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = seconds % 60;
   return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}


const canvas = document.getElementById("hangmancanvas")
const ctx = canvas.getContext('2d')
canvas.height = 400
canvas.width = 400
let selectedWord = ""
let displayWord = ""
let attempts = 0
let maxAttempts = 6
let guessedLetters = []
const initialzeGame = () => {
   const selectedIndex = parseInt(Math.random() * wordsToGuess.length)
   selectedWord = wordsToGuess[selectedIndex][0]
   const selectedClue = wordsToGuess[selectedIndex][1]
   hint.innerText = selectedClue
   word.innerText = "_ ".repeat(selectedWord.length).trim()
   console.log(selectedWord)
   // startTimer();

}

const gameOver = (isVictory) => {
   gameModel.style.display="flex"
   const modalText = isVictory ? `The correct word was :`: `You found the word :` 
   // gameModel.querySelector(".p").innerHTML = ` ${modalText} <b> ${currentword}</b> `;
   gameModel1.innerHTML=` ${modalText} <b> ${selectedWord}</b> `;
   // gameModel.classList.add("show");
}
const updateWord = () => {
   let updated = ''
   for (let i = 0; i < selectedWord.length; i++) {
      if (guessedLetters.indexOf(selectedWord[i]) > -1) {
         updated += selectedWord[i] + " "
      } else {
         updated += "_ "
      }
   }
   displayWord = updated
   console.log(word);
   word.innerText = updated;
}

const logic = (button, clickedLetter) => {
   if (selectedWord.includes(clickedLetter)) {
      console.log(button, clickedLetter);
      guessedLetters.push(clickedLetter)
      // for(let j=0;j<selectedWord.length;j++){
      //    if(selectedWord[j]==clickedLetter){
      //       word.replaceWith('_',clickedLetter)
      //    }
      // }
      updateWord()
   }
   else {
      attempts++;
      drawCanvas();
      if(attempts===maxAttempts){
         console.log("game over");
         return gameOver(true)
      }
      // console.log(updated);
      if(selectedWord.length===displayWord.length){
         // return gameOver(false)
         console.log("congrats");
      }
   }

   button.disabled = true;
}
initialzeGame()
for (let i = 97; i <= 122; i++) {
   const button = document.createElement("button")
   button.innerText = String.fromCharCode(i)

   keyboard.appendChild(button)
   button.addEventListener("click", e => logic(e.target, String.fromCharCode(i)))

}
const drawCanvas = () => {
   // ctx.clearRect(0,0,canvas.width,canvas.height)
   if (attempts == 0) {
      //base
      ctx.rect(50, 370, 300, 20)
      ctx.stroke()
      //vertical pole
      ctx.rect(100, 50, 20, 320)
      ctx.stroke()
      //horizontal pole
      ctx.rect(120, 70, 120, 10)
      ctx.stroke()
      ctx.moveTo(200, 80)
      ctx.lineTo(200, 120)
      ctx.stroke()
   }
   else if (attempts == 1) {
      //circle face
      ctx.moveTo(230, 150)
      ctx.arc(200, 150, 30, 0, Math.PI * 2)
      ctx.stroke()
   }
   else if (attempts == 2) {
      //body
      ctx.moveTo(200, 180)
      ctx.lineTo(200, 280)
      ctx.stroke()
   } else if (attempts == 3) {
      //lefthand
      ctx.moveTo(200, 200)
      ctx.lineTo(150, 240)
      ctx.stroke()
   }
   else if (attempts == 4) {
      //righthand
      ctx.moveTo(200, 200)
      ctx.lineTo(250, 240)
      ctx.stroke()
   }
   else if (attempts == 5) {
      //leftleg
      ctx.moveTo(200, 280)
      ctx.lineTo(150, 320)
      ctx.stroke()
   } else if (attempts == 6) {
      //rightleg
      ctx.moveTo(200, 280)
      ctx.lineTo(250, 320)
      ctx.stroke()
   }
}
drawCanvas()

// const hint = document.querySelector(".hint b")
// const word = document.getElementById("word")
// const keyboard = document.getElementById("keyboard")

// wordsToGuess = [
//    ['apple', 'a fruit'],
//    ['elephant', 'an animal'],
//    ['vijaywada', 'a city']
// ]
// const canvas = document.getElementById("hangmancanvas")
// const ctx = canvas.getContext('2d')
// canvas.height = 400
// canvas.width = 400
// let selectedWord = ""
// let displayWord = ""
// let attempts = 0
// let maxAttempts = 6
// let guessedLetters = []
// const initialzeGame = () => {
//    const selectedIndex = parseInt(Math.random() * wordsToGuess.length)
//    selectedWord = wordsToGuess[selectedIndex][0]
//    const selectedClue = wordsToGuess[selectedIndex][1]
//    //apple,elephant,vijaywada
//    hint.innerText = selectedClue
//    word.innerText = "_ ".repeat(selectedWord.length).trim()
//    console.log(selectedWord)
//    drawCanvas()
// }


// const drawCanvas = () => {
//    // ctx.clearRect(0,0,canvas.width,canvas.height)
//    if (attempts == 0) {
//       //base
//       ctx.rect(50, 370, 300, 20)
//       ctx.stroke()
//       //vertical pole
//       ctx.rect(100, 50, 20, 320)
//       ctx.stroke()
//       //horizontal pole
//       ctx.rect(120, 70, 120, 10)
//       ctx.stroke()
//       ctx.moveTo(200, 80)
//       ctx.lineTo(200, 120)
//       ctx.stroke()
//    }
//    else if (attempts == 1) {

//       //circle face

//       ctx.moveTo(230, 150)
//       ctx.arc(200, 150, 30, 0, Math.PI * 2)
//       ctx.stroke()
//    }
//    else if (attempts == 2) {
//       //body
//       ctx.moveTo(200, 180)
//       ctx.lineTo(200, 280)
//       ctx.stroke()
//    } else if (attempts == 3) {
//       //lefthand
//       ctx.moveTo(200, 200)
//       ctx.lineTo(150, 240)
//       ctx.stroke()
//    }
//    else if (attempts == 4) {
//       //righthand
//       ctx.moveTo(200, 200)
//       ctx.lineTo(250, 240)
//       ctx.stroke()
//    }
//    else if (attempts == 5) {
//       //leftleg
//       ctx.moveTo(200, 280)
//       ctx.lineTo(150, 320)
//       ctx.stroke()
//    } else if (attempts == 6) {
//       //rightleg
//       ctx.moveTo(200, 280)
//       ctx.lineTo(250, 320)
//       ctx.stroke()
//    }
// }
// initialzeGame()
// const updateWord = () => {

// }
// const performAction = (event) => {
//    const keyPressed = event.key;
//    console.log("performAction was initiated", keyPressed.toLower(keyPressed))
//    if (selectedWord.includes(keyPressed)) {


//    }
// }
// document.addEventListener('keydown', performAction)

// startButton.addEventListener("click", () => {
//    startButton.style.display = "none";
//    gameContainer.style.display = "block";
//    initialzeGame()
 
//  });
// let clockCount = 0
// const updateClock = () => {
//    clock.innerHTML = clockCount
//    clockCount++
// }
// setInterval(updateClock, 1000)
