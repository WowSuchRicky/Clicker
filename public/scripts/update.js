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
    },


//    soundPlay: function(){
//        document.getElementById("cityTwoAudio").play();
//    }

    city: function(citynum){
        switch(citynum){
            case 1:
                    document.getElementById("cityOneAudio").play();

                break;
            case 2:
                    document.getElementById("cityTwoAudio").play();

                break;
            case 3:
                    document.getElementById("cityThreeAudio").play();

                break;
            case 4:
                    document.getElementById("cityFourAudio").play();

                break;
            case 5:
                    document.getElementById("cityFiveAudio").play();

                break;
            case 6:
                    document.getElementById("citySixAudio").play();

                break;
            case 7:
                    document.getElementById("citySevenAudio").play();

                break;
            case 8:
                    document.getElementById("cityEightAudio").play();

                break;
            case 9:
                    document.getElementById("cityNineAudio").play();

                break;
            case 10:
                    document.getElementById("cityTenAudio").play();

                break;
            case 11:
                    document.getElementById("cityElevenAudio").play();

                break;
            default:
                break;
        }

    }


}