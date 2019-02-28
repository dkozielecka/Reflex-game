class LifeCounter {
  constructor(life) {
    this.leftLife = life;
    this.lifeBox = document.querySelector("#life");
    this.lifeBox.textContent = this.leftLife;
  }
}

export { LifeCounter };
