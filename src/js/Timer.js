class Timer {
  constructor() {
    this.timerBox = document.querySelector(".header__timer");
    this.leftTime = 60;
    this.timerBox.textContent = this.leftTime;
    this.countdown;
  }
  start() {
    if (this.leftTime < 3) {
      this.timerBox.classList.add("red");
    } else {
      this.timerBox.classList.remove("red");
    }
    this.leftTime -= 1;
    this.timerBox.textContent = this.leftTime;
  }
  stop() {
    clearInterval(this.countdown);
  }
}

export { Timer };
