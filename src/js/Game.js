import { LifeCounter } from "./LifeCounter.js";
import { timer } from "./Timer.js";
import { pointsCounter } from "./PointsCounter.js";
import { board } from "./Board.js";
import { button } from "./Button.js";
import { Item } from "./Item.js";

class Game {
  constructor() {
    this.squareTimer;
    this.timerInterval;
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
    item.chceckClick();
  }
  resetGame() {
    const lifeCounter = new LifeCounter(3);
    pointsCounter.actualPoints = 0;
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

export { Game, game };
