//HTML elements
let str = document.querySelector('#word1').textContent;
let word1 = document.querySelector('#word1');
const word2 = document.querySelector('#word2');
const correct = document.querySelector('.correct');

//game object
const game = {
  words: 'apple,linux,javascript,tutorial,legend,man,woman'.split(','),
  btns: [],
  count: 0,
  correction: [],
  // add btns
  addBtns() {
    for (let i = 0; i < str.length; i++) {
      var btn = document.createElement('button');
      btn.innerHTML = str[i];
      word2.appendChild(btn);
      this.btns.push(btn);
    }
  },
  //choose 1 word from words
  choice() {
    let idx = Math.floor(Math.random() * this.words.length);
    str = this.words[idx];
    word1.textContent = str;
  },
  // 결과값 확인
  resultCheck() {
    const result = document.querySelector('#check');
    if (this.word.join('') !== str) {
      result.textContent = '일치하지 않습니다.';
    } else if (this.word.join('') === str) {
      result.textContent = '일치합니다.';
      this.count++;
      this.correction.push('O');
      correct.textContent = this.correction.join('');
      this.finishGame();
    }
  },
  copyBtnText() {
    for (let i = 0; i < this.word.length; i++) {
      this.btns[i].innerHTML = this.word[i];
    }
  },
  finishGame() {
    if (game.count === 3) {
      correct.textContent = 'Thank you for playing';
    }
  },
};

// 버튼 기능들
const swap = (e) => {
  game.word.reverse();
  game.copyBtnText();
  game.resultCheck();
};

const rShift = (e) => {
  const s = game.word.pop();
  game.word.unshift(s);
  game.copyBtnText();
  game.resultCheck();
};

const lShift = (e) => {
  const s = game.word.shift();
  game.word.push(s);
  game.copyBtnText();
  game.resultCheck();
};

//Shuffle words
const shuffle = () => {
  const toggle = Math.floor(Math.random() * 2) === 0;
  const n = Math.floor(Math.random() * game.btns.length);
  if (toggle) {
    swap();
  }
  for (let i = 0; i < n; i++) {
    rShift();
  }
};

function init() {
  game.choice();
  game.word = str.split('');
  game.addBtns();
  shuffle();
}

init();