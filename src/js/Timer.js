class Timer {
  constructor(time) {
    this.timerBox = document.querySelector(".header__timer");
    this.leftTime = time;
    this.timerBox.textContent = this.leftTime;
    this.countdown;
  }

  startTiming() {
    if (this.leftTime > 0) {
      this.countdown = setInterval(() => {
        if (this.leftTime <= 4) {
          this.timerBox.classList.add("red");
        }
        this.leftTime -= 1;
        this.timerBox.textContent = this.leftTime;
      }, 1000);
    }
  }
  stopTiming() {
    clearInterval(this.countdown);
  }
}

const timer = new Timer(60);

export { Timer, timer };
