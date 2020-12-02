const barBtn = document.querySelector('.fa-bars');
let toggle = true;

const hideBarsHandler = (e) => {
  const nav2 = document.querySelector('#nav2-id');
  console.log(nav2.className);
  if (nav2.className === 'nav2') {
    nav2.classList.add('responsive');
  } else {
    nav2.className = 'nav2';
  }
};

function init() {
  barBtn.addEventListener('click', hideBarsHandler);
}

init();
