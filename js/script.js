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
        $('.menu').addClass('scrollmenu');
      } else {
        $('.menu').removeClass('scrollmenu');
      }
    });
    // Change price base on qty
    var amount = document.getElementById("amount").value;
    $("#qty").change(function(){
        var qty = document.getElementById("qty").value;
        var total = qty*amount;
        document.getElementById("total").innerHTML = total+" VND";
    });
    // Change source image when click sub image
    $("#product1-detail-1").click(function(){
      let src = $("#product1-detail-1").attr('src');
      $("#product1").attr('src',src);
    });
    $("#product1-detail-2").click(function(){
      let src = $("#product1-detail-2").attr('src');
      $("#product1").attr('src',src);
    });
    $("#product1-detail-3").click(function(){
      let src = $("#product1-detail-3").attr('src');
      $("#product1").attr('src',src);
    });
    $("#product1-detail-4").click(function(){
      let src = $("#product1-detail-4").attr('src');
      $("#product1").attr('src',src);
    });
  //   // Hover image
  //   $("#detail1").hide();
  //   $("#product1-hover").hover(function(){
  //       $("#detail1").fadeIn();
  //   }).mouseleave(function(){
  //       $("#detail1").hide();
  //   });
  });
  