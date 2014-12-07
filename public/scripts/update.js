var update = {

	doritos: 0, mountainDew: 0, doritosRate: 1, mountainDewRate: 1, logMessage: "In the update function", 
	buildings: [
		{level: 1, doritosCost: (Math.random() * 5 + 0),  mountainDewCost: (Math.random() * 5 + 10)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 1),  mountainDewCost: (Math.random() * 5 + 9)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 2),  mountainDewCost: (Math.random() * 5 + 8)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 3),  mountainDewCost: (Math.random() * 5 + 7)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 4),  mountainDewCost: (Math.random() * 5 + 6)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 5),  mountainDewCost: (Math.random() * 5 + 5)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 6),  mountainDewCost: (Math.random() * 5 + 4)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 7),  mountainDewCost: (Math.random() * 5 + 3)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 8),  mountainDewCost: (Math.random() * 5 + 2)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 9),  mountainDewCost: (Math.random() * 5 + 1)}, 
		{level: 1, doritosCost: (Math.random() * 5 + 10), mountainDewCost: (Math.random() * 5 + 0)}
	],

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
    	//don't need a switch but it is a game jam, after all le lenny
        switch(citynum){
            case 1:
            	if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityOneAudio").play();
            	}
                break;
            case 2:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityTwoAudio").play();
            	}
                break;
            case 3:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityThreeAudio").play();
            	}
                break;
            case 4:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityFourAudio").play();
            	}
                break;
            case 5:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityFiveAudio").play();
            	}
                break;
            case 6:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("citySixAudio").play();
            	}
                break;
            case 7:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("citySevenAudio").play();
            	}
                break;
            case 8:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityEightAudio").play();
            	}
                break;
            case 9:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityNineAudio").play();
            	}
                break;
            case 10:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityTenAudio").play();
            	}
                break;
            case 11:
                if(update.doritos >= update.buildings[citynum-1].doritosCost && update.mountainDew >= update.buildings[citynum-1].mountainDewCost){
            		update.levelBuilding(citynum-1);
            		document.getElementById("cityElevenAudio").play();
            	}
                break;
            default:
                break;
        }

    },

    levelBuilding: function(citynum) {
    	update.doritos     -= Math.round(update.buildings[citynum].doritosCost);
        update.mountainDew -= Math.round(update.buildings[citynum].mountainDewCost);
    	update.buildings[citynum].level++;
    	update.buildings[citynum].doritosCost     += ((Math.random() * (5 + update.buildings[citynum].level)) + citynum % 11);
    	update.buildings[citynum].mountainDewCost += ((Math.random() * (5 + update.buildings[citynum].level)) + (citynum + 10)% 11);
    	update.mountainDewRate++;
        update.doritosRate++;
    }


}