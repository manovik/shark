window.addEventListener("DOMContentLoaded", function() {
  
  $('.dinner__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<button class="slick-prev section__arrow" type="button"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke-width="2"/></svg></button>',
    nextArrow: '<button class="slick-next section__arrow" type="button"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke-width="2"/></svg></button>'
  });

  $('.main-menu__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<button class="slick-prev section__arrow" type="button"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke-width="2"/></svg></button>',
    nextArrow: '<button class="slick-next section__arrow" type="button"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke-width="2"/></svg></button>'
  });


});