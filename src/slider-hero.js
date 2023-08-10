$(document).ready(function () {
  $('.hero-hotel-gallery').slick({
    slide: '.hero-hotel-gallery-item',
    slidesToShow: 1,
    dots: false,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: $('.hero-hotel-left-btn'),
    nextArrow: $('.hero-hotel-right-btn'),
  });
});
