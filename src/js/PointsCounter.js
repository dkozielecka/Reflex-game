class PointsCounter {
  constructor() {
    this.pointsBox = document.querySelector("#points");
    this.actualPoints = 0;
    this.pointsBox.textContent = this.actualPoints;
    this.addPoints.bind(this);
  }
  addPoints() {
    this.actualPoints += 1;
    this.pointsBox.textContent = this.actualPoints;
  }
}
let pointsCounter = new PointsCounter();

export { PointsCounter, pointsCounter };
