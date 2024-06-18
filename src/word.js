let word;

export function setupWord(element, initWord) {
    word = initWord;

    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
    });
}

export function isLetterInWord(letter) {
    return word.includes(letter);
}

export function revealLetterInWord(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, idx) => {
        if (wordLetter === letter) {
            letterBoxes[idx].innerHTML = letter;
        }
    });
}