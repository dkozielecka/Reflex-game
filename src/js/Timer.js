class Timer {
  constructor(time) {
    this.timerBox = document.querySelector(".header__timer");
    this.leftTime = time;
    this.timerBox.textContent = this.leftTime;
  }

  startTiming() {
    this.leftTime > 0
      ? setInterval(() => {
          this.leftTime -= 1;
          this.timerBox.textContent = this.leftTime;
        }, 1000)
      : console.log("endGame()");
    clearInterval(this.setInterval);
  }
}

const timer = new Timer(60);

export { Timer, timer };
