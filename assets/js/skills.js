// Skills Page

$(document).ready(function(){
// ============ FUNCTIONS ============

	// Checks the coordinates of the navbar
	function collapseNavbar() {
		// If the coordinates is greater than 100, the navbar collapses into mobile display
	  if ($(".navbar").offset().top > 10) {
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
	}

	// Fades in navbar
	function navbarFadeIn(){
		$(".navbar").fadeIn(3000);
	}

	// Fades in page content
	function contentFadeIn(){
		$(".container.wrap").fadeIn(4000);
	}

	// Fades in "JE" logo in navbar
	function logoFadeIn(){
		$('#je-logo').css('visibility','visible').hide().fadeIn(3000);
	}

// ============ MAIN PROCESSES ============
	$(window).scroll(collapseNavbar);
	navbarFadeIn();
	setTimeout(logoFadeIn, 1500);
	setTimeout(contentFadeIn, 3000);
	$("#toggle-menu").on("click", menuToggle);
});


