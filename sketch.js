var canvas;
var backgroundImage;
var car1Image, car2Image;
var database;
var form, player;
var playerCount;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1s, car2s;
var allCars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png");
  car2Image = loadImage("./assets/car2.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  game = new Game();
  game.readGameState();

 game.test()
 
}

function draw() {
  background("white");
  if (playerCount == 2) {
    game.writeGameState(1);
  }
  if (gameState == 1) {
    game.startTheGame();
  }
}
