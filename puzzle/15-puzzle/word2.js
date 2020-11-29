//HTML elements
let str = document.querySelector('#word1').textContent;
let word1 = document.querySelector('#word1');
const word2 = document.querySelector('#word2');
const correct = document.querySelector('.correct');
const progress = document.querySelector('.time');
const ranking = document.querySelector('.rank');

//game object
const game = {
  // startTime을 지정함으로서 시작시간 저장
  startTime: new Date(),
  clock: setInterval(currentTime, 50), //
  words: 'apple,linux,javascript,tutorial,legend,man,woman'.split(','),
  btns: [],
  count: 0,
  correction: [],
  rank: [],

  // add btns
  addBtns() {
    this.btns = [];
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
      word2.textContent = '';
      this.countUp();
      init();
      if (this.count === 3) {
        this.finishGame();
        clearInterval(this.clock);
        game.clock = false;
        const name = prompt('이름 입력');
        const score = progress.textContent;
        const showRank = `${name}: ${score}`;
        game.rank.push(showRank);
      }
    }
  },
  countUp() {
    this.count++;
    this.correction.push('O');
  },
  copyBtnText() {
    for (let i = 0; i < this.word.length; i++) {
      this.btns[i].innerHTML = this.word[i];
    }
  },
  finishGame() {
    correct.textContent = 'Thank you for playing';
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

// show ranking

const showRank = (e) => {
  ranking.innerHTML = `${game.rank}`;
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

//현재 경과 시간을 알려주는 함수
function currentTime() {
  const seconds = new Date();
  const currentT = (seconds - game.startTime) / 1000;
  progress.textContent = currentT;
}
// 시간 되돌리기
function clockRewind() {
  if (!game.clock) {
    setInterval(currentTime, 50);
    game.clock = true;
  }
}

function init() {
  game.choice();
  game.word = str.split('');
  game.addBtns();
  shuffle();
  correct.textContent = game.correction.join('');
}

function init2() {
  correct.textContent = '';
  clockRewind();
  game.startTime = new Date();
  game.count = 0;
  game.correction = [];
  word2.textContent = '';
  game.choice();
  game.word = str.split('');
  game.addBtns();
  shuffle();
}

init();
