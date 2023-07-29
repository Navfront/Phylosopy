const burger = document.querySelector('.js-burger')
const menu = document.querySelector('.js-menu')
const backdrop = document.querySelector('.js-backdrop')
const MENU_ACTIVE_CLASS = 'menu--active'
const BURGER_ACTIVE_CLASS = 'burger-btn--active'
const BACKDROP_ACTIVE_CLASS = 'page__backdrop--active'
const NO_SCROLL_CLASS = 'no-scroll'

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle(MENU_ACTIVE_CLASS)
    burger.classList.toggle(BURGER_ACTIVE_CLASS)
    backdrop.classList.toggle(BACKDROP_ACTIVE_CLASS)
    document.body.classList.toggle(NO_SCROLL_CLASS)
  })
}
