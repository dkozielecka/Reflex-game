class Board {
  constructor() {
    this.boardBox = document.querySelector(".board");
  }
  makeBox(amount) {
    for (i = 0; i < amount; i++) {
      this.itemBox = document.createElement("div");
      this.itemBox.classList.add("item");
      this.boardBox.appendChild(this.itemBox);
    }
  }
}

const board = new Board();

export { Board, board };
