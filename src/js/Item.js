import { board } from "./Board.js";
import { pointsCounter } from "./PointsCounter.js";
import { lifeCounter } from "./LifeCounter.js";

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
  // loseLife() {
  //   this.squares = this.squares.map(item =>
  //     item.addEventListener("click", () => {
  //       if (!item.classList.contains("active")) {
  //         lifeCounter.leftLife -= 1;
  //       }
  //     })
  //   );
  // }
}

export { Item };
