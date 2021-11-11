(function ($) {
"use strict";

// 
/*===================================
    1. Mean-Menu Active
===================================*/
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

/*===================================
    2. smoothSctollTop
===================================*/
function smoothSctollTop() {
    $('.main-menu ul li > a').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 30
            }, 1000);
        }
    });
}
smoothSctollTop();

/*===================================
    3. owlCarousel
===================================*/
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots:true,
	smartSpeed: 500,
	autoplay: 4000,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        992:{
            items:3
        }
    }
});

/*===================================
    4. Back To Top/Scroll Up
===================================*/
$("#backTop").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 1200);
  return false;
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
    $("#backTop").fadeIn();
  } else {
    $("#backTop").fadeOut();
  }
});


})(jQuery);