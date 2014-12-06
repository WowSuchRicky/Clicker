var draw = {

	logMessage: "In the draw function", 


	draw: function() {
		console.log(draw.logMessage);
		//window.alert(draw.logMessage);

		document.getElementById("doritosCounter").innerHTML = "Doritos: " + update.doritos;
		document.getElementById("mountainDewCounter").innerHTML = "Mountain Dew: " + update.mountainDew;

	}
}