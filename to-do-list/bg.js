const mainBackGround = document.querySelector("#main-background");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1 }.jpg`
  image.classList.add("bgImage");
  mainBackGround.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
} 

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
 