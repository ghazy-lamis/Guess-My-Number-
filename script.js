
// Variables //

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const showNumber = document.querySelector(".number");
const highScore = document.querySelector(".highscore");
const showScore = document.querySelector(".score");
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
console.log(secretNumber)



// Functions //
function guessNumber(){
    let guessNumber = Number(document.querySelector(".guess").value) ; 
    if(! guessNumber){
        message.textContent = "Please enter a valid number!!!";
    }else if(guessNumber === secretNumber) {
        message.textContent = "Congratulations 😎!";
        document.body.style.backgroundColor = "rgb(96, 179, 71)";
        showNumber.textContent = secretNumber;
        highScore.textContent = score;
        
    }else if(guessNumber !== secretNumber){
        if(score>1){
            score --;
            showScore.textContent = score;
            message.textContent =
            guessNumber > secretNumber ? " please try a smaller Number" : " please try a larger Number"
        }else{
            message.textContent ="Game Over !!!";
            showScore.textContent = 0;
        }
    }
}

function againGame(){
    document.body.style.backgroundColor = "black";
    showNumber.textContent = "?";
    score = 20;
    showScore.textContent = score;
    secretNumber = Math.trunc(Math.random()*20)+1 ;
    message.textContent = "Start Guessing ...";
    document.querySelector(".guess").value="";


}
// LISTENERS //
checkBtn.addEventListener("click" , guessNumber);
againBtn.addEventListener("click",againGame);