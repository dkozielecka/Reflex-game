import { game } from "./Game.js";

class LifeCounter {
  constructor() {
    this.leftLife = 3;
    this.lifeBox = document.querySelector("#life");
    this.lifeBox.textContent = this.leftLife;
    this.lose.bind(this);
    this.reset.bind(this);
  }
  lose() {
    this.leftLife -= 1;
    this.lifeBox.textContent = this.leftLife;
    if (this.leftLife > 0) {
      alert("You lose a life!");
    } else if (this.leftLife === 0) {
      game.endGame();
    }
  }
  reset() {
    this.leftLife = 3;
    this.lifeBox.textContent = this.leftLife;
  }
}

export { LifeCounter };
