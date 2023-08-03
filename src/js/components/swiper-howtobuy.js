const howtobuySlider = document.querySelector('.js-howtobuy-slider')
const SWIPER_CLASS = 'swiper'
const SWIPER_WRAPPER_CLASS = 'swiper-wrapper'
const SWIPER_SLIDE_CLASS = 'swiper-slide'

let swiper = null

function sliderInit () {
  howtobuySlider.classList.add(SWIPER_CLASS)
  howtobuySlider.children[0].classList.add(SWIPER_WRAPPER_CLASS)
  Array.from(howtobuySlider.children[0].children).forEach(slideEl => {
    slideEl.classList.add(SWIPER_SLIDE_CLASS)
  })
  swiper = new Swiper(howtobuySlider, {
    slidesPerView: '3'
  })
}

function sliderDestroy () {
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
    if (!swiper) sliderInit()
  } else if (swiper) {
    sliderDestroy()
  }
}

howtobuySliderHandler()

if (howtobuySlider) {
  window.addEventListener('resize', howtobuySliderHandler)
}
