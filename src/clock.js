const clock = document.querySelector(".clock");

function getTime() {
  const Time = new Date();
  const HOUR = Time.getHours();
  const MINUTE = Time.getMinutes();

  clock.innerText = `
    ${HOUR > 10 ? HOUR : `0${HOUR}`}:${MINUTE > 10 ? MINUTE : `0${MINUTE}`}
  `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
