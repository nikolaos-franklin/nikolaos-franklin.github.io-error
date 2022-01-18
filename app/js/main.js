$(function(){

  jQuery(document).ready(function($){
  if($('ul.partners__box').find('li').length > 8){
  $('.partners__btn-show').click(function(){
  $('ul.partners__box li:nth-child(n+9)').slideToggle('');
  $(this).toggleClass('opnd_g');
  if($(this).hasClass('opnd_g')){
  $(this).html('Hide all');}
  else {$(this).html('Show more');}
  });
  }else{$('.show_hide_list').hide();}
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-btn').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
  });


  $(document).ready(function() {

 // Get current page URL
 var url = window.location.href;

 // remove # from URL
 url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

 // remove parameters from URL
 url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

 // select file name
 url = url.substr(url.lastIndexOf("/") + 1);
 
 // If file name not avilable
 if(url == ''){
 url = 'index.html';
 }
 
 // Loop all menu items
 $('.menu__list li').each(function(){

  // select href
  var href = $(this).find('a').attr('href');

  // Check filename
  if(url == href){

   // Select parent class
   var parentClass = $(this).parent('ul').attr('class');
 
   if(parentClass == 'submenu'){
 
    // Add class
    $(this).addClass('subactive');
    $(this).parents('.menu__list li').addClass('active');
   }else{

    // Add class
    $(this).addClass('active');
   }
 
  }
 });
});

  //  $(function(){

  //   var url = window.location.pathname, 
  //       urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
  //       // now grab every link from the navigation
  //       $('.menu__list a').each(function(){
  //           // and test its normalized href against the url pathname regexp
  //           if(urlRegExp.test(this.href.replace(/\/$/,''))){
  //               $(this).addClass('active');
  //           }
  //       });

  // });

    $('.faq__spoiler-top').click(function(event){
     $(this).toggleClass('active').next().slideToggle(300);
   });

   $('.current__spollers-top').click(function(event){
     $(this).toggleClass('active').next().slideToggle(300);
   });


    $('.recent-articles__slider').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      //autoplay: true,
      //speed: 1000,
      variableWidth: false,
      responsive: [
	    {
	      breakpoint: 1550,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
      {
	      breakpoint: 1191,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
      {
	      breakpoint: 491,
	      settings: {
          slidesToShow: 1,
	        arrows: false,
	      }
	    },
    ]
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
   speed: 1000,
   variableWidth: true,
   centerMode: true,
   responsive: [
     {
      breakpoint: 1500,
      settings: "unslick"
    }
  ]
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
   speed: 2000,
   //variableWidth: true,
   mobileFirst: true,
   appendDots:$('.slick-dots'),
    onAfterChange:function(slickSlider,i){
         //remove all active class
         $('.slider-nav .slick-slide').removeClass('slick-active');
         //set active class for current slide
         $('.slider-nav .slick-slide').eq(i).addClass('slick-active');         
     }
     
 });
 $('.slider-nav .slick-slide').eq(0).addClass('slick-active');

 $("#rateYo").rateYo({
    rating: 4.5,
    starWidth: "24px",
    normalFill: "#E1E1E1",
    ratedFill: "#06B25F",
    spacing: "10px",
    readOnly: true
  });

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

  document.getElementById('get_file').onclick = function() {
    document.getElementById('my_file').click();
  };
});