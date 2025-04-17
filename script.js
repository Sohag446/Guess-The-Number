randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Secret Number (Start):", randomNumber);

guessCount = 0;

const input = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const countText = document.getElementById("count_text");

submitBtn.addEventListener("click", function () {
    const userGuess = Number(input.value);

    if (userGuess < 1 || userGuess > 100) {
        message.innerText = "Please enter a number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    guessCount++;
    countText.innerText = "Guess Count: " + guessCount;

    if (userGuess === randomNumber) {
        message.innerText = "🎉 Correct! You guessed it in " + guessCount + " tries.";
        message.style.color = "green";
    } else if (userGuess < randomNumber) {
        message.innerText = "Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.innerText = "Too high! Try again.";
        message.style.color = "orange";
    }

    input.value = "";
});

resetBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Secret Number (Reset):", randomNumber);

    guessCount = 0;
    message.innerText = "";
    countText.innerText = "";
    input.value = "";
});
