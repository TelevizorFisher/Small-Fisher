$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:900,
		responsive:[
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1
				}
			}
		]
	});
});

