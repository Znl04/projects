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

  
  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__more-list').eq(i).toggleClass('catalog-item__more-list_active');
        })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});



});