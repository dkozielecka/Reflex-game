class Button {
  constructor() {
    this.startButton = document.querySelector("#start");
  }
  removeButtonStart() {
    this.startButton.classList.add("disable");
  }
}

const button = new Button();
export { Button, button };
