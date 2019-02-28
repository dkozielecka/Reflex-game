class PointsCounter {
  constructor(points) {
    this.pointsBox = document.querySelector("#points");
    this.actualPoints = 0;
    this.pointsBox.textContent = this.actualPoints;
  }
  addPoints() {
    this.actualPoints += 1;
    this.pointsBox.textContent = this.actualPoints;
  }
}
let pointsCounter = new PointsCounter();

export { PointsCounter, pointsCounter };
