$(document).ready(function () {
  var owl = $('.owl-carousel');
  $('.owl-carousel-type1').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $('.owl-carousel-type2').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  $('.owl-carousel-type3').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  $(window).scroll(function (event) {
    var pos_body = $('html,body').scrollTop();
    if (pos_body > 200) {
      console.log('có');
      $('.menu').addClass('scrollmenu');
    } else {
      $('.menu').removeClass('scrollmenu');
    }
  });
});
