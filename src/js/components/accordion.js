let acc = null

function checkResolution () {
  const screenWidth = window.innerWidth
  if (screenWidth <= 695) {
    if (!acc) {
      acc = new Accordion('.js-nav-accordion')
      acc.closeAll()
    }
  } else {
    if (acc) {
      acc.destroy()
      acc = null
    }
  }
}

checkResolution()

// Добавляем слушателя на событие resize окна
window.addEventListener('resize', checkResolution)
