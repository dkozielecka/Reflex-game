import { Game, game } from "./js/Game.js";

const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", game.startGame);
resetButton.addEventListener("click", game.resetGame);
