const howtobuySlider = document.querySelector('.js-howtobuy-slider')
const SWIPER_CLASS = 'swiper'
const SWIPER_WRAPPER_CLASS = 'swiper-wrapper'
const SWIPER_SLIDE_CLASS = 'swiper-slide'

let swiper = null

function sliderInit (offset = 0) {
  console.log('init')
  howtobuySlider.classList.add(SWIPER_CLASS)
  howtobuySlider.children[0].classList.add(SWIPER_WRAPPER_CLASS)
  Array.from(howtobuySlider.children[0].children).forEach(slideEl => {
    slideEl.classList.add(SWIPER_SLIDE_CLASS)
  })
  swiper = new Swiper(howtobuySlider, {
    slidesPerView: 'auto',

    slidesOffsetBefore: offset,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}

function sliderDestroy () {
  console.log('destr')
  howtobuySlider.classList.remove(SWIPER_CLASS)
  howtobuySlider.children[0].classList.remove(SWIPER_WRAPPER_CLASS)
  Array.from(howtobuySlider.children[0].children).forEach(slideEl => {
    slideEl.classList.remove(SWIPER_SLIDE_CLASS)
  })
  if (swiper) swiper.destroy()
  swiper = null
}

function howtobuySliderHandler () {
  const screenWidth = window.innerWidth
  if (screenWidth <= 1280 && screenWidth >= 695) {
    if (!swiper) sliderInit(screenWidth <= 800 ? 0 : 80)
  } else if (swiper) {
    sliderDestroy()
  }
}

howtobuySliderHandler()

if (howtobuySlider) {
  window.addEventListener('resize', howtobuySliderHandler)
}
