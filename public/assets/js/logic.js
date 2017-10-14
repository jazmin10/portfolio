
$(document).ready(function(){

	// Removes opacity from fly in text
	function intro(){
		$(".fly-in-text").removeClass("no-show");
	}

	// Fades in text after fly-in text finishes
	function fadeIn(){
		$(".fade-in").fadeIn(7000);
	}
	
	setTimeout(intro, 500);
	setTimeout(fadeIn, 3000);
	
});