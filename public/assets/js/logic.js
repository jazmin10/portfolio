
$(document).ready(function(){

	// Removes opacity from fly in text
	function intro(){
		$(".fly-in-text").removeClass("no-show");
	}

	// Fades in text after fly-in text finishes
	function fadeIn(){
		$(".fade-in").fadeIn(7000);
	}

	function collapseNavbar() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-header").css("float", "none");
        $(".navbar-toggle").css("display", "block");
        $(".navbar-nav").css("float", "none!important");
        $(".navbar-nav>li").css("float", "none");
        $("#bs-example-navbar-collapse-1").addClass("scroll-navbar");
   
    } else {
        $(".navbar-header").removeAttr("style");
        $(".navbar-toggle").removeAttr("style");
        $(".navbar-nav").removeAttr("style");
        $(".navbar-nav>li").removeAttr("style");
        $("#bs-example-navbar-collapse-1").removeClass("scroll-navbar");
    }
	}

	setTimeout(intro, 500);
	setTimeout(fadeIn, 3000);
	$(window).scroll(collapseNavbar);

	$("#toggle-menu").on("click", function(){
		var toggleValue = $("#toggle-menu").attr("value");

		if (toggleValue === "true") {
			$(".navbar-header").removeClass("spread-menu");
			$("#toggle-menu").attr("value", "false");
		}
		else {
			$(".navbar-header").addClass("spread-menu");
			$("#toggle-menu").attr("value", "true");
		}
	});


	
});