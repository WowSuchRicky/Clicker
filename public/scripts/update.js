var update = {

	doritos: 0, mountainDew: 0, doritosRate: 1, mountainDewRate: 1, logMessage: "In the update function", 

	update: function(currentTick) {

		if(update.shouldUpdate()) {
			console.log(update.logMessage);
			//window.alert(update.logMessage);

			update.doritos += update.doritosRate;
			update.mountainDew += update.mountainDewRate;

			console.log(update.doritos + " : " + update.mountainDew);
		}
	},

	//Isn't actually fully accurate, as update will not always be called 60 times a second, but this is dank enough for our jam.
    shouldUpdate: function(){
    	loop.framesInSecond++;
    	if (loop.framesInSecond == 60) {
    		update.update();
    		loop.framesInSecond = 0;
    		return true;
    	}
    	return false;
    }
}