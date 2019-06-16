var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
var numberofsquares = 6;


easyBtn.addEventListener("click",function(){
	numberofsquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numberofsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.background = "steelblue";
})

hardBtn.addEventListener("click",function(){
	numberofsquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numberofsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	squares[i].style.display="block";
	}
	h1.style.background = "steelblue";
})


resetButton.addEventListener("click",function(){
	colors = generateRandomColors(numberofsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent="";
	this.textContent = "New Colors";

})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = pickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColors(color){
	for (var i=0; i<colors.length;i++){
		squares[i].style.background = color;

	}
}

function pickColor(){
	var r = Math.floor(Math.random()*colors.length);
	return colors[r];
}


function generateRandomColors(num){
	var arr = [];
	for (var i=0; i<num; i++ ){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	return "rgb("+r+", "+g+", "+b+")"
}