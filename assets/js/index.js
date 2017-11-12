$(document).ready(function(){

	// Removes opacity from fly in text
	function intro(){
		$(".fly-in-text").removeClass("no-show");
	}

	// Fades in text after fly-in text finishes
	function fadeIn(){
		$(".fade-in").fadeIn(7000);
	}

	// Checks the coordinates of the navbar
	function collapseNavbar() {
		// If the coordinates is greater than 100, the navbar collapses into mobile display
    if ($(".navbar").offset().top > 100) {
        $(".navbar-header").css("float", "none");
        $(".navbar-toggle").css("display", "block");
        $(".navbar-nav").css("float", "none!important");
        $(".navbar-nav>li").css("float", "none");
        $("#bs-example-navbar-collapse-1").addClass("scroll-navbar");
   	// Otherwise, it displays horizontal non-mobile view
    } else {
        $(".navbar-header").removeAttr("style");
        $(".navbar-toggle").removeAttr("style");
        $(".navbar-nav").removeAttr("style");
        $(".navbar-nav>li").removeAttr("style");
        $("#bs-example-navbar-collapse-1").removeClass("scroll-navbar");
    }
	}

	// Changes background color from transparent to black when navbar button is toggled
	$("#toggle-menu").on("click", function(){
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

	// Fades in scroll arrow after navbar, flyin text, and name fades in
	function scrollFadeIn(){
		$("#main-scroll").fadeIn(3000);
	}

	// Creates bounces effect for scroll arrow (called every half second)
	function bounce(){
		// If bounceValue is false, move image up
		if (bounceValue === false){
			$("#main-scroll").css("bottom", "3.3%");
			bounceValue = true;
		}
		// Otherwise, move image down to its original place
		else {
			$("#main-scroll").css("bottom", "3%");
			bounceValue	= false;
		}
	}

	// Initial value for scroll arrow
	var bounceValue = false;

	setTimeout(intro, 500);
	setTimeout(fadeIn, 3000);
	setTimeout(scrollFadeIn, 7000);
	setInterval(bounce, 500);
	$(window).scroll(collapseNavbar);
	
});