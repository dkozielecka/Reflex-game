import { board } from "./Board.js";
import { pointsCounter } from "./PointsCounter.js";
import { lifeCounter } from "./LifeCounter.js";

class Item {
  constructor() {
    this.squares = [...document.querySelectorAll(".item")];
    this.square;
    this.activateSquare.bind(this);
    this.chceckClick.bind(this);
  }
  activateSquare() {
    this.square = this.squares[
      Math.floor(Math.random() * board.boardBox.childNodes.length)
    ];

    this.square.classList.add("active");

    setTimeout(() => {
      this.square.classList.remove("active");
    }, 2000);
  }
  chceckClick() {
    this.squares.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.contains("active")
          ? pointsCounter.addPoints()
          : lifeCounter.loseLife();
      });
    });
  }
}

export { Item };
