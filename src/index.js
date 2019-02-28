import { game } from "./js/Game.js";

const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", function() {
  game.startGame();
});
resetButton.addEventListener("click", function() {
  game.resetGame();
});
