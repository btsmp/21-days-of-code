const controls = document.querySelectorAll('.controls')
let minutesDisplay = document.querySelector('#min')
let secondsDisplay = document.querySelector('#sec')
let timerTimeOut;

controls.forEach(element => addEventListener('click', actionMainButton))

function playTimer() {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes == 0 & seconds == 0) {
      clearInterval(timerTimeOut)
      secondsDisplay.textContent = '25'
      minutesDisplay.textContent = '00'
    }

    if (seconds <= 0) {
      seconds = 60
      minutes--
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
    minutesDisplay.textContent = String(minutes).padStart(2, '0')

    playTimer()
  }, 1000)
}

function stopTimer() {
  clearInterval(timerTimeOut)
  minutesDisplay.textContent = 25
  secondsDisplay.textContent = '00'
}


function actionMainButton(event) {
  const action = event.target.dataset.action;

  if (action == "play") playTimer();
  if (action == "pause") clearInterval(timerTimeOut);
  if (action == "stop") stopTimer();

}