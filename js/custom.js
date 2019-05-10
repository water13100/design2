$(document).ready(function() {

	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage'],
		menu: '#js-menu',
		autoScrolling: false,
		fitToSection: false,
		scrollingSpeed: 1200
	});

	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// // rellax initialization
	// if(screen.width > 768){
	// 	var rellax = new Rellax('.rellax',{
	// 		center: true
	// 	});
	// }
		

	// carousel plugin initialization
	$('.owl-carousel').owlCarousel({
		center:true,
		stagePadding: 300,
	    loop:true,
	    margin:16,
	    nav:true,
	    // navText:[],
	    // dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
				items:1,
				stagePadding: 0,

	        },
	        768:{
				stagePadding: 300,
	            items:1
	        },
	        1000:{
				stagePadding: 300,

	            items:1
	        }
		}
		
	})
});


// ....
$(document).ready(function() {
		$(".fancybox").fancybox({ 
			'opacity': true,
            'overlayShow': false,
            'transitionIn': 'elastic',
        	'transitionOut' : 'none' 
		   });
	});
	$(function () {
		$("#fullpage img").each(function() {
		var parent = $(this).parent();
		if (parent[0].tagName == "A") {
		parent.attr({
		"class": "fancybox",
		"rel": "gallery"
		});
		} else {
		parent.wrap("<a class='fancybox' rel='gallery' href='" + $(this).attr("src") + "'></a>")
		}
		});
		$(".fancybox").fancybox();
		});

	// ％％％％％---/