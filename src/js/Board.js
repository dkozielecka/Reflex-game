class Board {
  constructor() {
    this.boardBox = document.querySelector(".board");
  }
  makeBox(amount) {
    for (let i = 0; i < amount; i++) {
      setTimeout(() => {
        this.itemBox = document.createElement("div");
        this.itemBox.classList.add("item");
        this.boardBox.appendChild(this.itemBox);
      }, 300);
    }
  }
}

const board = new Board();

export { Board, board };
