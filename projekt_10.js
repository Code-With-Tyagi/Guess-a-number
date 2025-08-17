let num = document.querySelector("#num");
let btn = document.querySelector(".btn");
let preGuess = document.querySelector("#preGuess");
let remGuess = document.querySelector("#remGuess");
let hint = document.querySelector(".hint");
let guess=10;
let allGuess=[];

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

btn.addEventListener("click", () => {
    let userGuess = num.value;
    prevGuess(userGuess);
    checkGuess(randomNum, userGuess);
});

function checkGuess(randomGuess, userGuess) {
    if(guess>0){
        if (randomGuess == userGuess) {
        hint.innerHTML = "<b>Your Guess is right</b>";
        btn.disabled=true;
        
    }
    else if (randomGuess > userGuess) {
        hint.innerHTML = "<b>Your Guess is small</b>";
    }
    else {
        hint.innerHTML = "<b>Your Guess is large</b>";
    }
    }
    guess--;
    remGuess.innerText=guess;

    if(guess==0){
        btn.disabled=true;
    }

}

function prevGuess(userGuess){
    allGuess.push(userGuess);

    preGuess.innerText = allGuess.join(", ");
}