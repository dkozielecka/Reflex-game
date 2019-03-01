class PointsCounter {
  constructor() {
    this.pointsBox = document.querySelector("#points");
    this.actualPoints = 0;
    this.pointsBox.textContent = this.actualPoints;
    this.add.bind(this);
  }
  add() {
    this.actualPoints += 1;
    this.pointsBox.textContent = this.actualPoints;
  }
  reset() {
    this.actualPoints = 0;
    this.pointsBox.textContent = this.actualPoints;
  }
}

export { PointsCounter };
