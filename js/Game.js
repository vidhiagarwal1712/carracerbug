class Game {
  constructor() {}
  startTheGame() {
    form.greeting.hide();
    player.readAllPlayers();
    var i = 0;
    var h = 500;
    image(
      backgroundImage,
      0,
      -displayHeight * 5,
      displayWidth,
      displayHeight * 6
    );
    //console.log(allPlayers)
    //console.log(allCars)
    for (var plr in allPlayers) {
      allCars[i].x = h;
      
      allCars[i].y = displayHeight - allPlayers[plr].distance;
      i = i + 1;
      h = h + 500;
    }

    drawSprites();
    if(keyDown(UP_ARROW))
    {
      console.log("hi")
      player.distance = player.distance+20
      player.createPlayerField()
    }
  }
  test()
  {
    if (gameState == 0) {
      player = new Player();
      player.readPlayerCount();
      form = new Form();
      form.displayForm();
    }
    car1s = createSprite(200, 200);
    car2s = createSprite(600, 200);
    car1s.scale = 0.1;
    car2s.scale = 0.1;
    car1s.addImage(car1Image);
    car2s.addImage(car2Image);
    allCars.push(car1s);
    allCars.push(car2s);
  }
  readGameState() {
    var gameRef = database.ref("gameState");
    gameRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  writeGameState(x) {
    database.ref("/").update({
      gameState: x,
    });
  }
}
