'use strict';

const timerButton = document.querySelector('.button-timer');

let duration = 900; // 15 минут в секундах
// let interval = setInterval(() => {
//   duration--;
//   const offset = 283 - (283 * (900 - duration)) / 900;
//   document.getElementById('progress').style.strokeDashoffset = offset;
//   if (duration <= 0) clearInterval(interval);
// }, 500);

const handleTimer = () => {
  if (timerButton.textContent === "stop") {
    timerButton.textContent = "start";
  } else {
    timerButton.textContent = "stop";
  }
}

timerButton.addEventListener('click', handleTimer);