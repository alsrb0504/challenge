const BG = document.querySelector(".bg-js");

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function handleBackground() {
  const RANDOM_NUMBER = getRandomNumber();
  BG.src = `./images/${RANDOM_NUMBER}.jpg`;
}

function init() {
  window.addEventListener("load", handleBackground);
}

init();
