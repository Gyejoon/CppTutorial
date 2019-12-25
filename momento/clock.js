const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${zeroPadding(hours, 2)}:${zeroPadding(
    minutes,
    2
  )}:${zeroPadding(seconds, 2)}`;
}

function zeroPadding(number, width) {
  number = number + "";
  return number.length >= width
    ? number
    : new Array(width - number.length + 1).join("0") + number;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
