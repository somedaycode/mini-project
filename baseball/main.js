function userNumber() {
  const num = prompt('숫자를 입력해주세요.').split('');
  const userNum = [];
  num.forEach((n) => {
    userNum.push(Number(n));
  });
  return userNum;
}

function computerNumber() {
  const n = [];
  n[0] = Math.floor(Math.random() * 9) + 1;
  do {
    n[1] = Math.floor(Math.random() * 9) + 1;
  } while (n[1] === n[0]);
  do {
    n[2] = Math.floor(Math.random() * 9) + 1;
  } while (n[2] === n[0] || n[2] === n[1]);

  return n;
}
function ballCount(U, C) {
  let ball = 0;
  C.forEach((c) => {
    if (U.includes(c)) ball++;
  });
  return ball;
}

function strikeCount(U, C) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < C.length; i++) {
    if (U[i] === C[i]) {
      strike++, ball--;
    }
  }
  return [strike, ball];
}

function init() {
  const Cnum = computerNumber();
  let strike = 0;
  while (strike !== 3) {
    strike = 0;
    let ball = 0;
    let Unum = userNumber();
    console.log(`사용자의 숫자: ${Unum.join('')}`);
    ball = ballCount(Unum, Cnum) + strikeCount(Unum, Cnum)[1];
    strike = strikeCount(Unum, Cnum)[0];
    console.log(`스트라이크: ${strike}, 볼: ${ball}`);
    ball = 0;
  }
  console.log(`3개의 숫자를 모두 맞히셨습니다. 게임 종료.`);
}

init();

// 다른 방법으로 컴퓨터의 숫자를 정하는법
// var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var number = [];
// for (var i = 0; i < 4; i++) {
//   var select = Math.floor(Math.random() * list.length);
//   console.log('list', list, 'number', number, 'length', list.length);
//   number[i] = list.splice(select, 1)[0];
// }
