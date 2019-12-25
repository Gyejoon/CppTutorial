const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function clearImage() {
  const image = body.querySelector("img");
  body.removeChild(image);
}

function init() {
  const imgNumber = genRandom();
  paintImage(imgNumber);
  setInterval(() => {
    const loopImgNumber = genRandom();
    clearImage();
    paintImage(loopImgNumber);
  }, 1000 * 60 * 30);
}

init();
