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
  $('.owl-carousel-type4').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      998: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $('.owl-carousel-type5').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      998: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $('.owl-carousel-type6').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1070: {
        items: 4,
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
  $('.owl-carousel-type7').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
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
    if (pos_body > 400) {
      $('.menu').addClass('scrollmenu');
    } else {
      $('.menu').removeClass('scrollmenu');
    }
  });
  // Change price base on qty
  if (document.getElementById('amount')) {
    var amount = document.getElementById('amount').value;
    $('#qty').change(function () {
      var qty = document.getElementById('qty').value;
      var total = qty * amount;
      document.getElementById('total').innerHTML = total + ' VND';
    });
  }
  // Change source image when click sub image
  $('#product1-detail-1').click(function () {
    let src = $('#product1-detail-1').attr('src');
    $('#product1').attr('src', src);
  });
  $('#product1-detail-2').click(function () {
    let src = $('#product1-detail-2').attr('src');
    $('#product1').attr('src', src);
  });
  $('#product1-detail-3').click(function () {
    let src = $('#product1-detail-3').attr('src');
    $('#product1').attr('src', src);
  });
  $('#product1-detail-4').click(function () {
    let src = $('#product1-detail-4').attr('src');
    $('#product1').attr('src', src);
  });
  $('#product6-detail-1').click(function () {
    let src = $('#product6-detail-1').attr('src');
    $('#product6').attr('src', src);
  });
  $('#product6-detail-2').click(function () {
    let src = $('#product6-detail-2').attr('src');
    $('#product6').attr('src', src);
  });
  $('#product6-detail-3').click(function () {
    let src = $('#product6-detail-3').attr('src');
    $('#product6').attr('src', src);
  });
  let modalDialog = document.querySelectorAll('.type-radio-input-product');
  modalDialog.forEach((item) => {
    item.addEventListener('click', () => {
      modalDialog.forEach((product) => {
        if (product.classList.contains('active-radio-input-product')) {
          product.classList.remove('active-radio-input-product');
        }
      });
      if (!item.classList.contains('active-radio-input-product')) {
        item.classList.add('active-radio-input-product');
      }
    });
  });
  let list_image_vertical = document.querySelectorAll(
    '.list-image-vertical img'
  );
  list_image_vertical.forEach((item) => {
    item.addEventListener('click', () => {
      let getSRCBigImage = document
        .querySelector('.product-detail-big-img img')
        .getAttribute('src');
      if (getSRCBigImage != item.getAttribute('src')) {
        document
          .querySelector('.product-detail-big-img img')
          .setAttribute('src', item.getAttribute('src'));
      }
    });
  });
});
