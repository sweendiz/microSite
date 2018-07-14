$(document).ready(function(){       
	$('.top-slider').slick({
		dots: false,
		infinite: true,
		speed: 700,
		autoplay:true,
		autoplaySpeed: 2500,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}