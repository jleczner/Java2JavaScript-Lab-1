" use strict ";

var display = document.getElementById("display");

function oneToTen() {
	display.innerHTML = "";
	for (var i = 1; i <= 10; i++) {
  		display.innerHTML += i + "<br>";
  	}
}

function oddNumbers() {
	display.innerHTML = "";
	for (var i = 1; i < 20; i++) {
  		display.innerHTML += i + "<br>";
  		i++;
  	}
}

function squareNumbers() {
	display.innerHTML = "";
	for (var i = 1; i <= 10; i++) {
		var temp = i;
		var square = temp * temp;
		display.innerHTML += square + "<br>";
	}
}

function random4() {
	display.innerHTML = "";
	for (var i = 0; i < 4; i++) {
		display.innerHTML += Math.floor(Math.random() * 100) + 1 + "<br>";
	}
}

function even(number) {
	display.innerHTML = "";
	for (var i = 2; i < number; i+=2) {
		display.innerHTML += i + "<br>";
	}
}



