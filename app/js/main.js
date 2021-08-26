$(function(){
 $('.top-slider__box').slick({
   dots: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   infinite: true,
   autoplay: true,
   fade: true,
   cssEase: 'linear',
   speed: 1000,
   appendDots:$('.slick-dots')
 });
});