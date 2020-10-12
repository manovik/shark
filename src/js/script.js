window.addEventListener("DOMContentLoaded", function() {

  function slider(wrapper){
    $(wrapper).slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: `
        <button 
          class="slick-prev section__arrow" 
            type="button">
          <svg width="17" 
            height="30" 
            viewBox="0 0 17 30" 
            fill="none">
              <path d="M16 1L2 15L16 29" 
                stroke-width="2"/>
          </svg>
        </button>`,
      nextArrow: `
        <button 
          class="slick-next section__arrow" 
          type="button">
            <svg width="17" 
              height="30" 
              viewBox="0 0 17 30" 
              fill="none">
              <path d="M1 1L15 15L1 29" 
                stroke-width="2"/>
            </svg>
        </button>`
    });
  }
  
  slider('.dinner__slider');
  slider('.main-menu__slider');

  $('.reviews__slider').slick({
    infinite: false,
    arrows: true,
    prevArrow: `
      <button 
        class="slick-prev reviews__arrow" 
        type="button">
          <svg width="10" 
                height="16" 
                viewBox="0 0 10 16" 
                fill="none">
            <path d="M9 1L2 8L9 15"
              stroke-width="2"/>
          </svg>
      </button>`,
    nextArrow: `
      <button 
        class="slick-next reviews__arrow" 
        type="button">
          <svg width="10" 
                height="16" 
                viewBox="0 0 10 16" 
                fill="none" >
            <path d="M1 1L8 8L1 15" 
              stroke-width="2"/>
          </svg>
      </button>`
  });

});