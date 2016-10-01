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
	for (var i = 1; i <= 100; i++) {
		display += i * i + "<br>";
	}
}