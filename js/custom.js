$(function () {
  $('.content01 .slide_01').slick({

    dots: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,

        }
      }
    ]
  });
  $('.content02 .main_visual_slide').slick({

  });

  $('.content03 .product_slide').slick({

    slidesToShow: 4,
    arrows: false
  });
  $('.content03 .arrows .prev').on('click', function () {
    $('.content03 .product_slide').slick('slickPrev')
  });

  $('.content03 .arrows .next').on('click', function () {
    $('.content03 .product_slide').slick('slickNext')
  });



  $('.content03 .dots a').on('mouseenter click', function (e) {


    e.preventDefault();
    let idx = $(this).parent().index();
    $('.content03 .product_slide').slick('slickGoTo', idx)

  });

  $('.coupang_slide').slick({
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    speed: 0
  });

  $('.coupang_slide').on('afterChange', function (e, s, c) {

    $('.coupang .dots li').removeClass('on');
    $('.coupang .dots li').eq(c).addClass('on')

  });

  $('.coupang .dots a').on('mouseenter click', function (e) {

    e.preventDefault();
    let idx = $(this).parent().index();
    $('.coupang_slide').slick('slickGoTo', idx)

  });


  $('.jiral_slide').on('init afterChange', function(){

    const current = $('.jiral_slide .slick-current');
    current.addClass('on').siblings().removeClass('on');
  });



  $('.jiral_slide').slick({
    autoplay: true,
    fade: true,
    pauseOnHover: false,

  });



})
