function init() {
  const bars = document.querySelector('.fa-bars');
  bars.addEventListener('click', (e) => {
    const menues = document.querySelector('.container');
    const sns = document.querySelector('.SNS');
    menues.classList.toggle('bars-active');
    sns.classList.toggle('bars-active');
  });
}

init();
