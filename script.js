let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');
  attempts++;

  // Define random events
  const randomEvents = [
    'You found a secret hint! The number is divisible by 5.',
    'Oops! Your guess is incorrect. Try a smaller number!',
    'Great guess, but the number is a bit higher!',
    'A random event has occurred! The number is less than 50!'
  ];

  // Random event selector
  function getRandomEvent() {
    const index = Math.floor(Math.random() * randomEvents.length);
    return randomEvents[index];
  }

  // Randomly choose whether to show a random event
  const showRandomEvent = Math.random() < 0.3; // 30% chance

  if (guess === targetNumber) {
    result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
  } else if (guess < targetNumber) {
    result.textContent = showRandomEvent ? getRandomEvent() : 'Too low! Try again.';
  } else if (guess > targetNumber) {
    result.textContent = showRandomEvent ? getRandomEvent() : 'Too high! Try again.';
  }
}
