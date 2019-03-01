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
  }
}
const lifeCounter = new LifeCounter(3);

export { LifeCounter, lifeCounter };
