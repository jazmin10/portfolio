$(document).ready(function(){
	function intro(){
		$(".fly-in-text").removeClass("no-show");
	}
	setTimeout(intro, 500);
	setTimeout(navbar, 2500);

	function navbar(){
		$("#test").fadeIn(9000);
	}
	
});