const burger = document.querySelector('.js-burger')
const menu = document.querySelector('.js-menu')
const backdrop = document.querySelector('.js-backdrop')
const MENU_ACTIVE_CLASS = 'menu--active'
const BURGER_ACTIVE_CLASS = 'burger-btn--active'
const BACKDROP_ACTIVE_CLASS = 'page__backdrop--active'
const NO_SCROLL_CLASS = 'no-scroll'

function closeMenu () {
  menu.classList.remove(MENU_ACTIVE_CLASS)
  burger.classList.remove(BURGER_ACTIVE_CLASS)
  backdrop.classList.remove(BACKDROP_ACTIVE_CLASS)
  document.body.classList.remove(NO_SCROLL_CLASS)
}

function openMenu () {
  menu.classList.add(MENU_ACTIVE_CLASS)
  burger.classList.add(BURGER_ACTIVE_CLASS)
  backdrop.classList.add(BACKDROP_ACTIVE_CLASS)
  document.body.classList.add(NO_SCROLL_CLASS)
}

if (burger && menu) {
  burger.addEventListener('click', () => {
    if (burger.classList.contains(BURGER_ACTIVE_CLASS)) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  backdrop.addEventListener('click', closeMenu)

  menu.addEventListener('click', evt => {
    evt.stopPropagation()
    if (evt.target === menu) closeMenu()
  })

  window.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closeMenu()
    }
  })
}

window.addEventListener('resize', closeMenu)
