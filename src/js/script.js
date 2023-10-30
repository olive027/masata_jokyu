
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
	// 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
	// ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // クリック有効化
  },
	effect: 'fade',
	speed: 3000,
	allowTouchMove: false,
});

// tab
$(".js-tab-content:first-of-type").css("display", "block");
$(".js-tab").click(function(){
	$(".is-active").removeClass('is-active');
	$(this).addClass('is-active');
	const Index = $(this).index();
	$(".js-tab-content").hide().eq(Index).fadeIn(600);
});

// headerに背景色を付ける
// let mvHeight = $(".js-mv-height").height();
// let headerHeight = $(".header").height();
// let header = $(".header");

// $(window).scroll(function(){
// 	if($(this).scrollTop() > mvHeight - headerHeight) {
// 		header.addClass('is-color');
// 	} else {
// 		header.removeClass('is-color');
// 	}
// });

// headerのスクロールが止まったら背景色
let timeout;
$(window).scroll(function(){
	$(".header").addClass('active');

	clearTimeout(timeout);

	timeout = setTimeout(function(){
		$(".header").removeClass('active');
	},300);
});

//modal
$(function () {
  //開くボタンをクリックしたらモーダルを表示する
  $(".js-modal-open").click(function () {
    $(".js-modal").fadeIn();
		return false;
  });
	$(".js-modal-close").click(function () {
    $(".js-modal").fadeOut();
		return false;
  });
});
// モーダルウィンドウオープン時の背景固定
$(function () {
  let scrollPosition;
  $(".js-modal-open").click(function(){
    scrollPosition = $(window).scrollTop();
    $("body").addClass("fixed").css({ top: -scrollPosition });
  });
  $(".js-modal-close").click(function(){
    $("body").removeClass("fixed").css({ top: 0 });
    window.scrollTo(0, scrollPosition);
  });
});


});
