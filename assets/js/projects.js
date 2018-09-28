// FEATURED WORK

$(document).ready(function(){
// ============ FUNCTIONS ============
	// Checks the coordinates of the navbar
	function collapseNavbar() {
		// If the coordinates is greater than 100, the navbar collapses into mobile display
    if ($(".navbar").offset().top > 80) {
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
	function menuToggle() {

		// Grab boolean value from #toggle-menu
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
	}

	// Fades in navbar
	function navbarFadeIn(){
		$(".navbar").fadeIn(3000);
	}

	// Fades in page content
	function contentFadeIn(){
		$(".content").fadeIn(4000);
		$(".scroll-arrow").css("display", "none");
	}

	// Fades in "JE" logo in navbar
	function logoFadeIn(){
		$('#je-logo').css('visibility','visible').hide().fadeIn(3000);
	}

	// Creates bounces effect for scroll arrow (called every half second)
	function bounce(){

		// Grabs boolean value of .scroll-arrow
		var bounceValue = $(".scroll-arrow").attr("value");

		// If bounceValue is false, move image up
		if (bounceValue === "false"){
			$(".scroll-arrow").css("bottom", "3.3%");
			$(".scroll-arrow").attr("value", "true");
		}
		// Otherwise, move image down to its original place
		else {
			$(".scroll-arrow").css("bottom", "3%");
			$(".scroll-arrow").attr("value", "false");
		}
	}

	// Fades in scroll arrow
	function arrowFadeIn(){
		$(".scroll-arrow").fadeIn(3000);
	}

	// Scrolls down to the project info when arrow is clicked
	function arrowScroll() {
		$("html, body").animate({
			scrollTop: $(".project-info").offset().top
		}, 1500);
	}
	
// ============ MAIN PROCESSES ============
	$(window).scroll(collapseNavbar);
	navbarFadeIn();
	setTimeout(logoFadeIn, 1500);
	setTimeout(contentFadeIn, 3000);
	setInterval(arrowFadeIn, 4000);
	setInterval(bounce, 500);
	$("#toggle-menu").on("click", menuToggle);
	$(".scroll-arrow").on("click", arrowScroll);
	
});