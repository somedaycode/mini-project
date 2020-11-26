let str = document.querySelector('#word1').textContent;
const word2 = document.querySelector('#word2');

const game = {};
game.list = [
  'apple',
  'banana',
  'house',
  'color',
  'puzzle',
  'baby',
  'origin',
  'everyday',
  'Enlgish',
  'candy',
];
game.copyBtnText = () => {
  for (let i = 0; i < game.word.length; i++) {
    game.btns[i].innerHTML = game.word[i];
  }
};

function createBtn() {
  for (let i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
  }
}

const removeChilde = (word2) => {
  while (word2.hasChildNodes()) {
    word2.removeChild(word2.lastChild);
  }
};

// 버튼 기능들
const selectWords = (e) => {
  game.btns = [];
  game.word = str.split('');
  removeChilde(word2);
  const ranNum = Math.floor(Math.random() * 9);
  const newWord = game.list[ranNum].toUpperCase();
  document.querySelector('#word1').textContent = newWord;
  str = newWord;
  game.word = str.split('');
  createBtn();
  game.copyBtnText();
};

const swap = (e) => {
  game.word.reverse();
  game.copyBtnText();
  resultCheck();
};

const rShift = (e) => {
  const s = game.word.pop();
  game.word.unshift(s);
  game.copyBtnText();
  resultCheck();
};

const lShift = (e) => {
  const s = game.word.shift();
  game.word.push(s);
  game.copyBtnText();
  resultCheck();
};

// 결과값 확인
const resultCheck = () => {
  const result = document.querySelector('#check');
  if (game.word.join('') !== str) {
    result.textContent = '일치하지 않습니다.';
  } else if (game.word.join('') === str) {
    result.textContent = '일치합니다.';
  }
};
