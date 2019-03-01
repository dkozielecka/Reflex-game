import { game } from "./Game.js";

class LifeCounter {
  constructor(life) {
    this.leftLife = life;
    this.lifeBox = document.querySelector("#life");
    this.lifeBox.textContent = this.leftLife;
    this.loseLife.bind(this);
  }
  loseLife() {
    this.leftLife -= 1;
    this.lifeBox.textContent = this.leftLife;
    if (this.leftLife > 0) {
      alert("You lose a life!");
    } else if (this.leftLife === 0) {
      game.endGame();
    }
  }
}
const lifeCounter = new LifeCounter(3);

export { LifeCounter, lifeCounter };
