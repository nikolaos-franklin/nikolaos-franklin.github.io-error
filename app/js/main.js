$(function(){

   $('.recent__slider').slick({
   dots: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   infinite: true,
   autoplay: true,
   speed: 1000
 });

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

 $("#rateYo").rateYo({
    rating: 4.5,
    starWidth: "24px",
    normalFill: "#E1E1E1",
    ratedFill: "#06B25F",
    spacing: "10px",
    readOnly: true
  });
});