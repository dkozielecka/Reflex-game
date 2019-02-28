class Timer {
  constructor(time) {
    this.timerBox = document.querySelector(".header__timer");
    this.leftTime = 60;
    this.timerBox.textContent = this.leftTime;
    this.countdown;
  }
  startTiming() {
    if (this.leftTime < 3) {
      this.timerBox.classList.add("red");
    }
    this.leftTime -= 1;
    this.timerBox.textContent = this.leftTime;
  }
  stopTiming() {
    clearInterval(this.countdown);
  }
}

const timer = new Timer(60);

export { Timer, timer };
