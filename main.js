import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

  setSharkImage(document.querySelector('#shark-img'), numWrong);

  setupWord(document.querySelector('#word-container'), word);

  revealLetterInWord(word);
  
  // sharkImgEl = document.querySelector('#shark-img');

  const handleGuess = (guessEvent, letter) => {
  console.log(`guessEvent is: ${guessEvent}`);
  console.log(`letter is: ${letter}`);

  // Disable button after click
  const button = guessEvent.target;
    button.setAttribute('disabled', true);

  //Handle correct/incorrect guess
    if (isLetterInWord(letter)) {
     revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(sharkImgEl, numWrong);
    }
  };

  let isWordComplete = true;
  for (const el of document.querySelectorAll('.letter-box')) {
    if (el.innerText === '') {
      isWordComplete = false;
      break; // break will exit the loop
    }
  }

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
  }

initSharkwords();

document.querySelectorAll('button').forEach((btn) => {
  btn.setAttribute('disabled', true);
});

// const isWordComplete = Array.from(document.querySelectorAll('letter-box')).every(
//   (el) => el.innerText !== '',
// );  // another version of check if the word is completed