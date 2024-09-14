let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');
  attempts++;

  if (guess === targetNumber) {
    result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
  } else if (guess < targetNumber) {
    result.textContent = 'Too low! Try again.';
  } else if (guess > targetNumber) {
    result.textContent = 'Too high! Try again.';
  }
}
