const btnContainer = document.querySelector('.btn-contain');
const displayEx = document.querySelector('.ex');
const resultBtn = document.querySelector('.display-result');
let result = [];

// 숫자 버튼을 클릭하면 숫자를 디스플레이에 표시해줌.
function getValue(e) {
  const clickedValue = e.target.value;
  if (clickedValue === `=`) {
    equalClicked();
  } else if (clickedValue === 'C') {
    displayClear();
  } else {
    result.push(clickedValue);
    displayEx.innerText = result.join('');
  }
}

// 화면 클리어
function displayClear() {
  displayEx.innerText = `0`;
  resultBtn.innerText = `0`;
  result = [];
}

// 결과값
function equalClicked() {
  const finalResult = eval([...result].join(''));
  resultBtn.innerHTML = finalResult;
}

function eventHandler() {
  btnContainer.addEventListener('click', getValue);
}

function init() {
  eventHandler();
}

init();
