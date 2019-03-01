import { LifeCounter } from "./LifeCounter.js";
import { Timer } from "./Timer.js";
import { PointsCounter } from "./PointsCounter.js";
import { Board } from "./Board.js";
import { button } from "./Button.js";
import { SquareContainer } from "./SquareContainer.js/index.js";

class Game {
  constructor() {
    this.squareTimer;
    this.timerInterval;
    this.endGame.bind(this);
    this.board = new Board();
    this.timer = new Timer(60);
    this.pointsCounter = new PointsCounter();
    this.lifeCounter = new LifeCounter(3);
  }
  start() {
    this.board.makesBox(24);
    this.timerInterval = setInterval(() => {
      this.timer.leftTime > 0 ? this.timer.start() : this.endGame();
    }, 1000);
    button.removeButtonStart();
    const item = new SquareContainer();
    this.squareTimer = setInterval(() => {
      item.activateSquare();
    }, 3000);
    item.chceckClick();
  }
  resetGame() {
    this.lifeCounter.reset();
    this.pointsCounter.reset();
    this.timer.stop();
    this.timer.leftTime = 60;
    this.timer.start();
    clearInterval(this.squareTimer);
    const item = new SquareContainer();
    this.squareTimer = setInterval(() => {
      item.activateSquare();
    }, 3000);
  }
  endGame() {
    clearInterval(this.squareTimer);
    alert(`Game over! Your score's: ${pointsCounter.actualPoints}`);
    this.timer.leftTime = 60;
    this.timer.start();
    this.pointsCounter.reset();
    this.lifeCounter.reset();
    const item = new SquareContainer();
    this.squareTimer = setInterval(() => {
      item.activateSquare();
    }, 3000);
  }
}

const game = new Game();

export { Game, game };
