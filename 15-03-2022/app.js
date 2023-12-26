const timer = document.getElementById("timer");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let int = null;

const togglePauseButton = () => {
  pauseButton.classList.toggle("hidden");
  startButton.removeAttribute("disabled");
};

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", (event) => {
  const currentElement = event.target;
  togglePauseButton();
  int = setInterval(displayTimer, 10);
  currentElement.setAttribute("disabled", true);
});

const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", () => {
  clearInterval(int);
  togglePauseButton();
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timer.innerHTML = "00 : 00 : 00 : 000 ";

  if (!pauseButton.classList.contains("hidden")) return togglePauseButton();
});

const displayTimer = () => {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
};
