var colors = ["Red", "Green", "Blue", "Orange", "Brown", "Yellow"];

//4 ans - Add, List, Delete, Quit

var ans = prompt("What would you like to do?");

while (ans !== "Quit") {
	if (ans === "Add") {
		newColor = prompt("Type in the color you want to add.");
		colors.push(newColor);
		alert("New color " + newColor + " added.");
	}
	else if (ans === "List") {
		colors.forEach(function(array, index){
			alert(index + " : " + array);
		});
	}
	else if (ans === "Delete") {
		deleteColor = prompt("Type in the number of color you want to delete.");
		colors.splice(deleteColor, 1);
		alert("Color " + colors[deleteColor] + " deleted.");
	}
	else if (ans === "Random") {
		// var num = colors.length;
		// function getRandomInt(max) {
		//   return Math.floor(Math.random() * Math.floor(max));
		// }
		// alert(getRandomInt(colors[num]));
		var randomValue = colors[Math.floor(colors.length * Math.random())];
		alert("Go with " + randomValue + " this time.");
	}
	ans = prompt("What would you like to do?");
}
alert("Okay, see you again!");