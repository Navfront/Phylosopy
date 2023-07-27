const burger = document.querySelector('.js-burger')
const menu = document.querySelector('.js-menu')
const MENU_ACTIVE_CLASS = 'menu--active'
const BURGER_ACTIVE_CLASS = 'burger-btn--active'

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle(MENU_ACTIVE_CLASS)
    burger.classList.toggle(BURGER_ACTIVE_CLASS)
  })
}
