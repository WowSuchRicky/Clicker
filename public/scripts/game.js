window.alert("Hello! I am an alert box!!");






//Shamelessly taken from this website since I don't know how to javascript.
//http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/
game.run = (function() {
  var loops = 0, skipTicks = 1000 / game.fps,
      maxFrameSkip = 10,
      nextGameTick = (new Date).getTime();
  
  return function {
    loops = 0;
    
    while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
      game.update();
      nextGameTick += skipTicks;
      loops++;
    }
    
    game.draw();
  };
})();

// Start the game loop
game._intervalId = setInterval(game.run, 0);