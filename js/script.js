new Swiper('.swiper', {
    // Navigation arrows
  navigation: {
    nextEl: '.portfolio__arrow--right',
    prevEl: '.portfolio__arrow--left',
    disabledClass: 'portfolio__arrow--disable',
  },
  breakpoints: {
      480: {
          grid: {
              fill: 'row',
              rows: 2
          }
      },
      768: {
          slidesPerView: 2,
          grid: {
            fill: 'row',
            rows: 2
        }
      }
  }
})

$('.header__contacts-burger').click(function() {
    $('.header__contacts').slideToggle();
})

$('.callback__btn').click(() => {
  $('.page__overlay--modal').fadeIn(400).css('display', 'flex')
})

$('.modal__close').click(() => {
  $('.page__overlay--modal').fadeOut(400)
})