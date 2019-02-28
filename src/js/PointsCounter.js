class PointsCounter {
  constructor(points) {
    this.pointsBox = document.querySelector("#points");
    this.actualPoints = points;
    this.pointsBox.textContent = this.actualPoints;
  }
}

const pointsCounter = new PointsCounter(0);

export { PointsCounter, pointsCounter };
