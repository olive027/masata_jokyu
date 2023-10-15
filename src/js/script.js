
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	$('.js-sp-nav').fadeToggle();
	// $('.js-sp-nav').toggleClass('is-active');
})

});
