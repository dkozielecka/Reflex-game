class PointsCounter {
  constructor(points) {
    this.pointsBox = document.querySelector("#points");
    this.actualPoints = points;
    this.pointsBox.textContent = this.actualPoints;
  }
}

export { PointsCounter };
