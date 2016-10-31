var gridSize = 16;
var color = "black";

$(document).ready(function(){
	initGrid(+gridSize);
	$('button').on('click', function(event) {
    event.preventDefault();
  })
});

var resizeGrid = function(){
	gridSize = prompt("Enter new grid size: ", gridSize);
	$('.container').empty();
	initGrid(+gridSize)
}
var generateSquares = function(n){
	var squares = ''
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			squares += '<div class="square"></div> ';
		}
	}
	return squares;
}

var setSize = function(n){
	var width = ($('.container').width() / parseFloat(n));
    var height = ($('.container').height() / parseFloat(n));
    return {'height' : height, 'width' : width};
}

var setColor = function(color){
	if (color === 'random') {
    	return randomColor();
  	}
  	else {
    	return color;
  	}
}

var randomColor = function() {
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

var initGrid = function(n){
	$('.container').append(generateSquares(n));
	$('.square').css(setSize(n));
	$('.square').hover(function(){
		$(this).css({'background-color' : setColor(color)});
	});
}