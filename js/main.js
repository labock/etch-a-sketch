$(document).ready(function(){
	for (var i = 0; i < 16; i++) {
		var div = document.createElement("div");
		div.style.height = "100px";
		div.style.width  = "100px";
		div.style.background = "red";
		// div.style.margin = "5px";  --good for initial visualization
		div.style.float = "left";
		if(i%4 == 0){
			div.style.clear = "both";
		}
		$('.container').append(div);
	};
	$('div').mouseenter(function(){
		this.style.background = "black";
	});
});