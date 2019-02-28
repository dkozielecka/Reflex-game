import { board, Board } from "./Board.js";

class Item {
  constructor() {
    this.squares = [...document.querySelectorAll(".item")];
    this.squareTimer;
    this.square;
  }
  activateSquare() {
    this.squareTimer = setInterval(() => {
      this.square = this.squares[
        Math.floor(Math.random() * board.boardBox.childNodes.length) + 1
      ];
      this.square.classList.add("active");
      setTimeout(() => {
        this.square.classList.remove("active");
      }, 2000);
    }, 3000);
  }
}

export { Item };
