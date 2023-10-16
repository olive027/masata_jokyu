
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').fadeToggle(600);
	$('html').toggleClass('is-fixed');
	// $('.js-sp-nav').toggleClass('is-active');
})

// swiper
const swiper = new Swiper(".swiper", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	effect: 'fade',
	speed: 3000,
	allowTouchMove: false,
});

});
