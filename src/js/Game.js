import { LifeCounter } from "./LifeCounter.js";
import { Timer } from "./Timer.js";
import { PointsCounter } from "./PointsCounter.js";
import { Board } from "./Board.js";
import { button } from "./Button.js";
import { SquareContainer } from "./SquareContainer.js";

class Game {
  constructor() {
    this.squareTimer;
    this.timerInterval;
    this.endGame.bind(this);
    this.board = new Board();
    this.timer = new Timer(60);
    this.pointsCounter = new PointsCounter();
    this.lifeCounter = new LifeCounter(3);
    this.square;
  }
  start() {
    this.board.makesBox(24);
    this.timerInterval = setInterval(() => {
      this.timer.leftTime > 0 ? this.timer.start() : this.endGame();
    }, 1000);
    button.removeButtonStart();
    this.square = new SquareContainer();
    this.squareTimer = setInterval(() => {
      this.square.activateSquare();
    }, 3000);
    this.square.chceckClick();
  }
  resetGame() {
    this.lifeCounter.reset();
    this.pointsCounter.reset();
    this.timer.stop();
    this.timer.leftTime = 60;
    this.timer.start();
    clearInterval(this.squareTimer);
    this.square = new SquareContainer();
    this.squareTimer = setInterval(() => {
      this.square.activateSquare();
    }, 3000);
  }
  endGame() {
    alert(`Game over! Your score's: ${this.pointsCounter.actualPoints}`);
    this.resetGame();
  }
}

const game = new Game();

export { Game, game };
