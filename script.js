let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function getHint() {
  if (attempts > 0 && attempts % 5 === 0) {
    // Provide a hint every 5 attempts
    const hints = [
      `The number is ${targetNumber % 2 === 0 ? 'even' : 'odd'}.`,
      `The number is between ${Math.max(targetNumber - 10, 1)} and ${Math.min(targetNumber + 10, 100)}.`,
      `The number is ${targetNumber % 10 === 0 ? 'a multiple of 10' : 'not a multiple of 10'}.`
    ];
    const hintIndex = Math.floor(Math.random() * hints.length);
    return hints[hintIndex];
  }
  return null;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');
  attempts++;

  // Random events
  const randomEvents = [
    'You found a secret hint! The number is divisible by 5.',
    'Oops! Your guess is incorrect. Try a smaller number!',
    'Great guess, but the number is a bit higher!',
    'A random event has occurred! The number is less than 50!'
  ];

  function getRandomEvent() {
    const index = Math.floor(Math.random() * randomEvents.length);
    return randomEvents[index];
  }

  const showRandomEvent = Math.random() < 0.3; // 30% chance
  const hint = getHint();

  if (guess === targetNumber) {
    result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
  } else if (guess < targetNumber) {
    result.textContent = showRandomEvent ? getRandomEvent() : `Too low! ${hint ? 'Hint: ' + hint : 'Try again.'}`;
  } else if (guess > targetNumber) {
    result.textContent = showRandomEvent ? getRandomEvent() : `Too high! ${hint ? 'Hint: ' + hint : 'Try again.'}`;
  }
}
