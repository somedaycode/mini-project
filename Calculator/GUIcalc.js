const isDisplayResult = document.querySelector('.btn-equal');
const btnContainer = document.querySelector('.btn-contain');
const displayEx = document.querySelector('.ex');
let exResult = [];

function getValue(e) {
  const clickedValue = e.target.value;
  if (clickedValue !== undefined) {
    exResult.push(clickedValue);
    displayEx.innerText = Number(exResult.join(''));
  }
}

const btnClicked = () => {
  btnContainer.addEventListener('click', getValue);
};

function init() {
  btnClicked();
}

init();
