const word = document.querySelector('.word');
const wordFollow = document.querySelector('.word-follow');
const wordLists = word.textContent.split('');

const createButton = () => {
  wordLists.forEach((wordList) => {
    const createBtn = document.createElement('button');
    const btnName = document.createTextNode(`${wordList}`);
    createBtn.appendChild(btnName);
    createBtn.className = `${wordList}`;
    wordFollow.appendChild(createBtn);
  });
};

function init() {
  createButton();
}

init();
