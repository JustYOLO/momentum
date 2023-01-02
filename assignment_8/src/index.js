const rangeInput = document.querySelector("#range"); // number range input form
const guessForm = document.querySelector("#guessForm"); // guessed number input form
const guessInput = document.querySelector("#guess");;
const resultDiv = document.querySelector("#resultDiv");
const result = document.querySelector("#resultDiv p");
const win = document.querySelector("#resultDiv h4");

function resultOutput(guessNum, randomNum) {
    result.innerText = `You chose: ${guessNum}, the machine chose: ${randomNum}`;
}
function winOutput(isWin) {
    if(isWin) { win.innerText= "You Win!"; }
    else { win.innerText = "You Lost!"; }
}

function guessInputHandler(event) {
    event.preventDefault();

    const guessNum = parseInt(guessInput.value);
    const rangeNum = parseInt(rangeInput.value);
    const randomNum = Math.floor(Math.random() * (rangeNum + 1));
    const isWin = (guessNum === randomNum);
    
    if (rangeNum === null || rangeNum === undefined || rangeNum.isNan || rangeNum === "") 
    {
        result.innerText = "Error! Range is not set";
        result.classList.remove("hidden");
    } else if (rangeNum < 0) {
        result.innerText = "Error! Range is negative";
        resultDiv.classList.remove("hidden");
    } else {
        resultOutput(guessNum, randomNum);
        winOutput(isWin);
        resultDiv.classList.remove("hidden");
    }
}

guessForm.addEventListener("submit", guessInputHandler);
