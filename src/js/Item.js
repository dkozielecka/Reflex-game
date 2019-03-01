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
      if (this.square.classList.contains("active")) {
        lifeCounter.loseLife();
        this.square.classList.remove("active");
      } else {
        this.square.classList.remove("active");
      }
    }, 2000);
  }
  chceckClick() {
    this.squares.forEach(item => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          pointsCounter.addPoints();
        } else {
          lifeCounter.loseLife();
        }
      });
    });
  }
}

export { Item };
