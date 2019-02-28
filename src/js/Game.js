import { LifeCounter } from "./LifeCounter.js";
import { timer } from "./Timer.js";
import { PointsCounter } from "./PointsCounter.js";
import { board } from "./Board.js";
import { button } from "./Button.js";
import { Item } from "./Item.js";

class Game {
  constructor() {
    this.squareTimer;
  }
  startGame() {
    board.makeBox(24);
    this.timerInterval = setInterval(() => {
      timer.leftTime > 0 ? timer.startTiming() : game.endGame();
    }, 1000);
    button.removeButtonStart();
    const item = new Item();
    this.squareTimer = setInterval(() => {
      item.activateSquare();
    }, 3000);
  }
  resetGame() {
    const lifeCounter = new LifeCounter(3);
    const pointsCounter = new PointsCounter(0);
    timer.stopTiming();
    timer.leftTime = 61;
    timer.startTiming();
    clearInterval(this.squareTimer);
    const item = new Item();
    this.squareTimer = setInterval(() => {
      item.activateSquare();
    }, 3000);
  }
}

const game = new Game();

Game.prototype.endGame = () => {
  clearInterval(this.squareTimer);
  clearInterval(this.timerInterval);
  window.alert(`Game over! Your score is: ${pointsCounter.actualPoints}`);
};

export { Game, game };
