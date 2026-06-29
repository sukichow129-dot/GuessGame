let target;
let attempt = 0;
const maxAttempt = 5;

const guessInput = document.getElementById("guess-value");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const attemptText = document.getElementById("attempt");
const result = document.getElementById("result");

// Initial page
window.onload = function () {
    guessInput.value = "";
    attemptText.innerHTML = "0";
    result.innerHTML = "";

    guessBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
};

function restartGame() {

    target = Math.floor(Math.random() * 20) + 1;

    attempt = 0;
    attemptText.innerHTML = attempt;
    result.innerHTML = "";

    guessInput.value = "";
    guessInput.focus();

    restartBtn.style.display = "none";
    guessBtn.style.display = "inline-block";

    // Uncomment if you want to test
    // console.log(target);
}

function guessNumber() {

    let value = guessInput.value;

    if (value == "" || isNaN(value))
        return;

    value = Number(value);

    attempt++;
    attemptText.innerHTML = attempt;

    if (value > target) {

        result.innerHTML = value + " is too high";

    } else if (value < target) {

        result.innerHTML = value + " is too low";

    } else {

        result.innerHTML = "You WIN";

        guessBtn.style.display = "none";
        restartBtn.style.display = "inline-block";
    }

    if (attempt >= maxAttempt && value != target) {

        result.innerHTML = "You LOSE";

        guessBtn.style.display = "none";
        restartBtn.style.display = "inline-block";
    }

    guessInput.value = 0;
    guessInput.focus();
}