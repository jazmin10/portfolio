// ABOUT PAGE SCRIPT

$(document).ready(function(){

	// Checks the coordinates of the navbar
	function collapseNavbar() {

		// If the coordinates is greater than 100, the navbar collapses into mobile display
    if ($(".navbar").offset().top > 80) {
        $(".navbar-header").css("float", "none");
        $(".navbar-toggle").css("display", "block");
        $(".navbar-nav").css("float", "none!important");
        $(".navbar-nav>li").css("float", "none");
        $("#navbar-collapse-toggle").addClass("scroll-navbar");
   	// Otherwise, it displays horizontal non-mobile view
    } else {
        $(".navbar-header").removeAttr("style");
        $(".navbar-toggle").removeAttr("style");
        $(".navbar-nav").removeAttr("style");
        $(".navbar-nav>li").removeAttr("style");
        $("#navbar-collapse-toggle").removeClass("scroll-navbar");
    }
	}

	// Changes background color from transparent to black when navbar button is toggled
	$("#toggle-menu").on("click", function(){

		// Grabs boolean value of #toggle-menu
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

	// Fades in navbar
	function navbarFadeIn(){
		$(".navbar").fadeIn(3000);
	}

	// Fades in content (intro tagline and bio)
	function contentFadeIn(){
		$(".full-page").fadeIn(4000);

		// Set #scroll-arrow display to none, in order to fade in later
		$("#scroll-arrow").css("display", "none");
	}

	// Fades in "JE" logo in navbar
	function logoFadeIn(){
		$('#je-logo').css('visibility','visible').hide().fadeIn(3000);
	}

	// Fades in scroll arrow
	function arrowFadeIn(){
		$("#scroll-arrow").fadeIn(3000);
	}

	// Creates bounces effect for scroll arrow (called every half second)
	function bounce(){

		// Grabs boolean value from #scroll-arrow
		var bounceValue = $("#scroll-arrow").attr("value");

		// If bounceValue is false, move image up
		if (bounceValue === "false"){
			$("#scroll-arrow").css("bottom", "3.3%");
			$("#scroll-arrow").attr("value", "true");
		}
		// Otherwise, move image down to its original place
		else {
			$("#scroll-arrow").css("bottom", "3%");
			$("#scroll-arrow").attr("value", "false");
		}
	}
	
	// Main processes
	$(window).scroll(collapseNavbar);
	navbarFadeIn();
	setTimeout(logoFadeIn, 1500);
	setTimeout(contentFadeIn, 3000);
	setInterval(arrowFadeIn, 4000);
	setInterval(bounce, 500);
	
});