$(document).ready(function(){
	
	initGrid(16);
q
	$("#clearbutton").click(function(){
		$(".single-square").css("background-color", "white");
		gridSize = prompt("How big of a square would you like to make?");
		initGrid(gridSize);
	});
});

function initGrid(gridSize)	{
	//for loop to build initial grid
	$("#wrapper").html("");
	for (var i = 0; i < Math.pow(gridSize, 2); i++) {
		$("#wrapper").append("<div class='single-square'></div>");
	}
	//set the size of the individual squares
	$(".single-square").height($("#wrapper").height()/gridSize);
	$(".single-square").width($("#wrapper").width()/gridSize);

	defaultColor();
};

function defaultColor()	{
	$(".single-square").hover(function(){
		$(this).css("background-color", "#515354");
	});
};