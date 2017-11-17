// HOMEPAGE SCRIPT

$(document).ready(function(){

	// Removes opacity from fly in text
	function intro(){
		$(".fly-in-text").removeClass("no-show");
	}

	// Fades in content (navbar and web dev title) after fly-in text finishes
	function fadeIn(){
		$(".fade-in").fadeIn(7000);

		// To avoid "Web Developer" title appearing before hand, it will start with color
		// black and the golden color will be here
		$("#dev-title").css("color", "#bd9753");
	}

	// Checks the coordinates of the navbar
	function collapseNavbar() {

		// If the coordinates are greater than 100, the navbar collapses into mobile display
    if ($(".navbar").offset().top > 100) {
        $(".navbar-header").css("float", "none");
        $(".navbar-toggle").css("display", "block");
        $(".navbar-nav").css("float", "none!important");
        $(".navbar-nav>li").css("float", "none");
        $("#navbar-collapse-toggle").addClass("scroll-navbar");
		}
   	// Otherwise, it displays horizontal non-mobile view
    else {
        $(".navbar-header").removeAttr("style");
        $(".navbar-toggle").removeAttr("style");
        $(".navbar-nav").removeAttr("style");
        $(".navbar-nav>li").removeAttr("style");
        $("#navbar-collapse-toggle").removeClass("scroll-navbar");
    }
	}

	// Changes background color from transparent to black when navbar button is toggled
	$("#toggle-menu").on("click", function(){

		// Grabs boolean value from #toggle-menu
		var toggleValue = $("#toggle-menu").attr("value");

		// If the value is true (the menu is expaned), change background to transparent and turn
		// the value to false
		if (toggleValue === "true") {
			$(".navbar-header").removeClass("spread-menu");
			$("#toggle-menu").attr("value", "false");
		}
		// If the value is false (the menu is not expanded), change background to black and turn
		// value to true
		else {
			$(".navbar-header").addClass("spread-menu");
			$("#toggle-menu").attr("value", "true");
		}
	});

	// Fades in scroll arrow after navbar, fly-in text, and name fades in
	function scrollFadeIn(){
		$("#main-scroll").fadeIn(3000);
	}

	// Creates bounces effect for scroll arrow (called every half second)
	function bounce(){
		// Grabs boolean value of #main-scroll
		var bounceValue = $("#main-scroll").attr("value");
		
		// If bounceValue is false, move image up
		if (bounceValue === "false"){
			$("#main-scroll").css("bottom", "3.3%");
			$("#main-scroll").attr("value", "true");
		}
		// Otherwise, move image down, to its original place
		else {
			$("#main-scroll").css("bottom", "3%");
			$("#main-scroll").attr("value", "false");
		}
	}

	// Main processes
	setTimeout(intro, 500);
	setTimeout(fadeIn, 3000);
	setTimeout(scrollFadeIn, 7000);
	setInterval(bounce, 500);
	$(window).scroll(collapseNavbar);
	
});