class Timer {
  Constructor(time) {
    const timerBox = document.querySelector(".header__timer");
    let leftTime = time;
    timerBox.textContent = leftTime;
    console.log("hh");
  }
  startTiming() {
    leftTime > 0
      ? setInterval(() => {
          leftTime -= 1;
          timerBox.textContent = leftTime;
        }, 1000)
      : endGame();
  }
}

const timer = new Timer(60);
