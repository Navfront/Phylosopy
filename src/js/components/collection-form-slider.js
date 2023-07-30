// Square slider

;(() => {
  let timeout = false
  function debounce (cb) {
    return (value, handle) => {
      if (!timeout) {
        cb(value, handle)
        timeout = true
        setTimeout(() => {
          timeout = false
        }, 20)
      }
    }
  }

  const MAX_VALUE = 9999

  const squareSliderContainer = document.querySelector('.js-square-slider')
  const slider = squareSliderContainer.querySelector('.js-slider')
  const inputPriceFrom = squareSliderContainer.querySelector('.js-slider-from')
  const inputPriceTo = squareSliderContainer.querySelector('.js-slider-to')
  console.log(squareSliderContainer, slider, inputPriceFrom, inputPriceTo)
  if (slider) {
    const noUi = noUiSlider.create(slider, {
      start: [3478, 7814],
      connect: true,
      step: 1,
      range: {
        min: 0,
        max: MAX_VALUE
      }
    })

    const btns = noUi.target.querySelectorAll('.noUi-handle')
    const [left, right] = btns
    const inner = `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" width="6.36396" height="6.36396" transform="rotate(45 5 0)" fill="currentColor"/>
    </svg>`
    const div = document.createElement('div')
    div.innerHTML = inner
    const svg = div.firstChild
    left.append(svg.cloneNode(true))
    right.append(svg.cloneNode(true))
    ;[left, right].forEach(el => {
      const FOCUS_CLASS = 'noUi-handle--focused'
      el.addEventListener('focus', () => {
        el.classList.add(FOCUS_CLASS)
      })
      el.addEventListener('blur', () => {
        el.classList.remove(FOCUS_CLASS)
      })
    })

    function numberToText (number) {
      if (number < 100) return number
      const text = number.toString()
      const splited = text.split('')
      const res = [...splited.slice(0, 2), ',', ...splited.slice(2)].join('')
      return res
    }

    function handleInputs (values, handle) {
      if (handle) {
        const valueto = parseInt(values[1])
        inputPriceTo.value = numberToText(valueto)
      } else {
        const valuefrom = parseInt(values[0])

        inputPriceFrom.value = numberToText(valuefrom)
      }
    }

    noUi.on('update', debounce(handleInputs))

    const values = [inputPriceFrom.value, inputPriceTo.value]
    inputPriceFrom.addEventListener('change', () => {
      const value = parseInt(inputPriceFrom.value.replace(/\D/i, ''))
      values[0] = value < 0 || value > MAX_VALUE ? 0 : value
      noUi.set(values)
    })
    inputPriceTo.addEventListener('change', () => {
      const value = parseInt(inputPriceTo.value.replace(/\D/i, ''))
      values[1] = value < 0 || value > MAX_VALUE ? MAX_VALUE : value
      noUi.set(values)
    })
  }
})()

// Level slider
;(() => {
  let timeout = false
  function debounce (cb) {
    return (value, handle) => {
      if (!timeout) {
        cb(value, handle)
        timeout = true
        setTimeout(() => {
          timeout = false
        }, 20)
      }
    }
  }

  const MAX_VALUE = 17

  const squareSliderContainer = document.querySelector('.js-level-slider')
  const slider = squareSliderContainer.querySelector('.js-slider')
  const inputPriceFrom = squareSliderContainer.querySelector('.js-slider-from')
  const inputPriceTo = squareSliderContainer.querySelector('.js-slider-to')
  console.log(squareSliderContainer, slider, inputPriceFrom, inputPriceTo)
  if (slider) {
    const noUi = noUiSlider.create(slider, {
      start: [1, 17],
      connect: true,
      step: 1,
      range: {
        min: 1,
        max: MAX_VALUE
      }
    })

    const btns = noUi.target.querySelectorAll('.noUi-handle')
    const [left, right] = btns
    const inner = `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" width="6.36396" height="6.36396" transform="rotate(45 5 0)" fill="currentColor"/>
    </svg>`
    const div = document.createElement('div')
    div.innerHTML = inner
    const svg = div.firstChild
    left.append(svg.cloneNode(true))
    right.append(svg.cloneNode(true))
    ;[left, right].forEach(el => {
      const FOCUS_CLASS = 'noUi-handle--focused'
      el.addEventListener('focus', () => {
        el.classList.add(FOCUS_CLASS)
      })
      el.addEventListener('blur', () => {
        el.classList.remove(FOCUS_CLASS)
      })
    })

    function handleInputs (values, handle) {
      if (handle) {
        const valueto = parseInt(values[1])
        inputPriceTo.value = valueto
      } else {
        const valuefrom = parseInt(values[0])

        inputPriceFrom.value = valuefrom
      }
    }

    noUi.on('update', debounce(handleInputs))

    const values = [inputPriceFrom.value, inputPriceTo.value]
    inputPriceFrom.addEventListener('change', () => {
      const value = parseInt(inputPriceFrom.value.replace(/\D/i, ''))
      values[0] = value < 0 || value > MAX_VALUE ? 0 : value
      noUi.set(values)
    })
    inputPriceTo.addEventListener('change', () => {
      const value = parseInt(inputPriceTo.value.replace(/\D/i, ''))
      values[1] = value < 0 || value > MAX_VALUE ? MAX_VALUE : value
      noUi.set(values)
    })
  }
})()
