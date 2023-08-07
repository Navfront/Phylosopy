const upBtn = document.querySelector('.js-up-btn')
if (upBtn) {
  upBtn.addEventListener('click', () => {
    window.scrollTo({ behavior: 'smooth', top: '0px' })
  })
}
