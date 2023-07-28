let acc = null
let footerAcc = null

function checkResolution () {
  const screenWidth = window.innerWidth
  if (screenWidth <= 695) {
    if (!acc) {
      acc = new Accordion('.js-nav-accordion')
      acc.closeAll()

      footerAcc = new Accordion('.js-footer-accordion')
      footerAcc.closeAll()
    }
  } else {
    if (acc) {
      acc.destroy()
      acc = null
      footerAcc.destroy()
      footerAcc = null
    }
  }
}

checkResolution()

// Добавляем слушателя на событие resize окна
window.addEventListener('resize', checkResolution)
