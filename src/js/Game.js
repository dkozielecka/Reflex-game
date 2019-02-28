import { LifeCounter } from "./LifeCounter.js";
import { Timer, timer } from "./Timer.js";
import { PointsCounter } from "./PointsCounter.js";
import { Board, board } from "./Board.js";
import { Button, button } from "./Button.js";
import { Item } from "./Item.js";

class Game {
  constructor() {
    this.squareTimer;
  }
  startGame() {
    board.makeBox(24);
    timer.startTiming(60);
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
  //   endGame()
}

const game = new Game();

export { Game, game };
