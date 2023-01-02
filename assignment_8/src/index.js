const rangeInput = document.querySelector("#range"); // number range input form
const guessForm = document.querySelector("#guessForm"); // guessed number form
const guessInput = document.querySelector("#guess"); // guessed number input
const result = document.querySelector("#result"); // result output

function resultOutput(guessNum, randomNum, isWin) {
    result.innerHTML = `You chose: ${guessNum}, the machine chose: ${randomNum}. <br> ${isWin ? "<strong>You Win!</strong>" : "<strong>You Lose!</strong>"}`; // isWin will have boolean value for won the game or not
}

function guessInputHandler(event) {
    event.preventDefault();

    const guessNum = parseInt(guessInput.value, 10);
    const rangeNum = parseInt(rangeInput.value, 10); // make it integer
    const randomNum = Math.floor(Math.random() * (rangeNum + 1)); // get random number, range of 0~rangeNum 
    const isWin = (guessNum === randomNum); // is user win or not
    
    if (rangeNum === null || rangeNum === undefined || rangeNum.isNan || rangeNum === "" || isNaN(rangeNum))  // handle wrong input
    {
        result.innerText = "Error! Range is not set";
    } else if (rangeNum < 0) { // handle negative range
        result.innerText = "Error! Range is negative!";
    } else { // good to go?
        resultOutput(guessNum, randomNum, isWin);
    }
    result.classList.remove("hidden"); // make result element visable
}

guessForm.addEventListener("submit", guessInputHandler); // handle submit from guessForm