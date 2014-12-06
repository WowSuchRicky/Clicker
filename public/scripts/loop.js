
var loop = {

	logMessage: "In the loop function: ",



	//consider refactoring to something that limits draw calls to not kill cpu. 
	//May be a good starting point: http://codeincomplete.com/posts/2013/12/4/javascript_game_foundations_the_game_loop/
//	loop: function() {
//
//		var loops = 0, fps = 30, timestamp = (new Date).getTime();
//
//		while((new Date).getTime() - timestamp < 1000/fps){ //one second has passed
//			update.update();
//			loops++;
//		}
//
//		draw.draw();
//		var endTimestamp = (new Date).getTime();
//		console.log("started updating at: " + timestamp + " finished at: " + endTimestamp + " difference of: " + (endTimestamp - timestamp) + " with loops: " + loops);
//	}

    loop: function(){
        update.update();
        draw.draw();

        requestAnimationFrame(loop.loop)
    }



}

// Start the game loop
//loop._intervalId = setInterval(loop.loop, 0);
requestAnimationFrame(loop.loop);
