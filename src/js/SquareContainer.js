import { game } from "./Game.js";

class SquareContainer {
  constructor() {
    this.squares = [...document.querySelectorAll(".square")];
    this.square;
    this.activateSquare.bind(this);
    this.chceckClick.bind(this);
  }
  activateSquare() {
    this.square = this.squares[
      Math.floor(Math.random() * game.board.boardBox.childNodes.length)
    ];

    this.square.classList.add("active");

    setTimeout(() => {
      if (this.square.classList.contains("active")) {
        game.lifeCounter.lose();
      }
      this.square.classList.remove("active");
    }, 2000);
  }
  chceckClick() {
    this.squares.forEach(item => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          game.pointsCounter.add();
        } else {
          game.lifeCounter.lose();
        }
      });
    });
  }
}

export { SquareContainer };
