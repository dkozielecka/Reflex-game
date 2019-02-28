import { board } from "./Board.js";
import { pointsCounter } from "./PointsCounter.js";

class Item {
  constructor() {
    this.squares = [...document.querySelectorAll(".item")];
    this.squareTimer;
    this.square;
  }
  activateSquare() {
    this.square = this.squares[
      Math.floor(Math.random() * board.boardBox.childNodes.length)
    ];
    this.square.classList.add("active");
    this.square.addEventListener("click", function() {
      pointsCounter.addPoints();
    });
    setTimeout(() => {
      this.square.classList.remove("active");
    }, 2000);
  }
}

export { Item };
