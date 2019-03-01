import { game } from "./js/Game.js";

const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", function() {
  game.start();
});
resetButton.addEventListener("click", function() {
  game.resetGame();
});
