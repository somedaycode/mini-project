function userNumber() {
  const num = prompt('숫자를 입력해주세요.').split('');
  const userNum = [];
  for (let i = 0; i < num.length; i++) {
    userNum[i] = Number(num[i]);
  }
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

function init() {
  console.log(computerNumber());
  console.log(userNumber());
}

init();

// var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var number = [];
// for (var i = 0; i < 4; i++) {
//   var select = Math.floor(Math.random() * list.length);
//   console.log('list', list, 'number', number, 'length', list.length);
//   number[i] = list.splice(select, 1)[0];
// }
