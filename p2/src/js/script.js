$(document).ready(function(){
  $('.carousel__inner').slick(
    {
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    }
  );
});