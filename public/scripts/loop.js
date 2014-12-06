
var loop = {

	logMessage: "In the loop function: ", 


	//copypasta'd. Used before I made my own.
	// loop: function() {
	// 	console.log(loop.logMessage + loop.loops);


	// 	var loops = 0, fps = 60, skipTicks = 1000 / loop.fps,
	//     	maxFrameSkip = 10,
	//     	nextGameTick = (new Date).getTime();


	//     	// console.log("loop");
	//     	loops = 0;
	    
	// 	    while ((new Date).getTime() >= nextGameTick && loops < maxFrameSkip) { // changed from '>' tp '>=' because it goes wicked fast
	// 	    	// console.log("in update loop in loop");
	// 	        update.update();
	// 	        nextGameTick += skipTicks;
	// 	        loops++;
	// 	    }
		    
	// 	    draw.draw();
	// 	    // console.log("loopend");
	// },



	//consider refactoring to something that limits draw calls to not kill cpu. 
	//May be a good starting point: http://codeincomplete.com/posts/2013/12/4/javascript_game_foundations_the_game_loop/
	loop: function() {

		var loops = 0, fps = 30, timestamp = (new Date).getTime();

		while((new Date).getTime() - timestamp < 1000/fps){ //one second has passed
			update.update();
			loops++;
		}

		draw.draw();
		var endTimestamp = (new Date).getTime();
		console.log("started updating at: " + timestamp + " finished at: " + endTimestamp + " difference of: " + (endTimestamp - timestamp) + " with loops: " + loops);
	}

}

// Start the game loop
loop._intervalId = setInterval(loop.loop, 0);
