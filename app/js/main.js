$(function(){

  // Get the modal
const popupLinks = document.querySelectorAll('.popup');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


   $('.current__spollers-top').click(function(event){
     $(this).toggleClass('active').next().slideToggle(300);
   });


  document.getElementById('get_file').onclick = function() {
    document.getElementById('my_file').click();
  };


    $('.recent-articles__slider').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 1000
    });

    $(".recent-articles__top-stars").each( function() {
    var rating = $(this).attr("data-rating");
    $(this).rateYo(
        {
            rating: rating,
            rating: 4,
            starWidth: "24px",
            normalFill: "#E1E1E1",
            ratedFill: "#06B25F",
            spacing: "10px",
            readOnly: true
        }
    );
});

  $(".article__helpful-stars").each( function() {
    var rating = $(this).attr("data-rating");
    $(this).rateYo(
        {
            rating: rating,
            rating: 0,
            starWidth: "24px",
            normalFill: "#E1E1E1",
            ratedFill: "#06B25F",
            spacing: "10px"
        }
    );
});

  $(".article__top-stars").each( function() {
    var rating = $(this).attr("data-rating");
    $(this).rateYo(
        {
            rating: rating,
            rating: 4,
            starWidth: "24px",
            normalFill: "#E1E1E1",
            ratedFill: "#06B25F",
            spacing: "10px",
            readOnly: true
        }
    );
});

  $(".blog__card-stars").each( function() {
    var rating = $(this).attr("data-rating");
    $(this).rateYo(
        {
            rating: rating,
            rating: 4,
            starWidth: "24px",
            normalFill: "#E1E1E1",
            ratedFill: "#06B25F",
            spacing: "10px",
            readOnly: true
        }
    );
});

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