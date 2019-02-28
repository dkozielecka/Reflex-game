import { LifeCounter } from "./LifeCounter.js";
import { Timer, timer } from "./Timer.js";
import { PointsCounter } from "./PointsCounter.js";
import { Board, board } from "./Board.js";
import { Button, button } from "./Button.js";

class Game {
  constructor() {}
  startGame() {
    board.makeBox(24);
    const lifeCounter = new LifeCounter(3);
    const pointsCounter = new PointsCounter(0);
    timer.startTiming(60);
    button.removeButtonStart();
  }
  resetGame() {
    const lifeCounter = new LifeCounter(3);
    const pointsCounter = new PointsCounter(0);
    timer.stopTiming();
    timer.leftTime = 61;
    timer.startTiming();
  }
  //   endGame()
}

const game = new Game();

export { Game, game };
