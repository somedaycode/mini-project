const str = document.querySelector('#word1').textContent;
const word2 = document.querySelector('#word2');
const game = {};
game.word = str.split('');
game.btns = [];

for (let i = 0; i < str.length; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = str[i];
  word2.appendChild(btn);
  game.btns.push(btn);
}

game.copyBtnText = () => {
  for (let i = 0; i < game.word.length; i++) {
    game.btns[i].innerHTML = game.word[i];
  }
};

// 버튼 기능들
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
