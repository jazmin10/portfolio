$(document).ready(function(){

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

	$(window).scroll(collapseNavbar);
	
});