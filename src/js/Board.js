class Board {
  constructor() {
    this.boardBox = document.querySelector(".board");
  }
  makesBox(amount) {
    for (let i = 0; i < amount; i++) {
      this.squareBox = document.createElement("div");
      this.squareBox.classList.add("square");
      this.boardBox.appendChild(this.squareBox);
    }
  }
}

export { Board };
