$(function() {



       






	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".logo").animated("tada", "");




// slick ---------------------------------


// slick end -----------------------------


$( function() {
		$(".dot").dotdotdot({watch: "window"});
	} );


});
