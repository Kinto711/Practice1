function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Guess the number between 1 and 10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("You guessed to low");
    } else if (randomNr < guess) {
      console.log("You guessed to high");
    }
  } while (guess != randomNr);
  console.log("You won!");
}

guessGame();
