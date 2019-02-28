import { LifeCounter, lifeCounter } from "./js/LifeCounter.js";
import { Timer, timer } from "./js/Timer.js";
import { PointsCounter, pointsCounter } from "./js/PointsCounter.js";
import { Board, board } from "./Board.js";

class Game {
  constructor() {}
  startGame() {
    board.makeBox(24);
    const lifeCounter = new LifeCounter(3);
    const pointsCounter = new PointsCounter(0);
    timer.startTiming(60);
  }
  //   endGame()
}

const game = new Game();

export { Game, game };
