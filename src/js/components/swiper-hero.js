const heroSlider = document.querySelector('.js-hero-slider')

if (heroSlider) {
  new Swiper(heroSlider, {
    loop: true,
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.js-hero-slider-pagination',
      clickable: true
    }
  })
}
