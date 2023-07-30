const choices = new Choices(document.querySelector('.js-collection-select'), {
  duplicateItemsAllowed: false,
  searchEnabled: false,
  position: 'bottom',
  allowHTML: true,
  classNames: {
    containerOuter: 'form-select',
    containerInner: 'form-select__inner',
    input: 'form-select__input',
    inputCloned: 'form-select__input--cloned',
    list: 'form-select__list',
    listSingle: 'form-select__list--single',
    listDropdown: 'form-select__list--dropdown',
    item: 'form-select__item',
    itemSelectable: 'form-select__item--selectable',
    itemDisabled: 'form-select__item--disabled',
    itemChoice: 'form-select__item--choice',
    placeholder: 'form-select__placeholder',
    activeState: 'is-active',
    focusState: 'is-focused',
    openState: 'is-open',
    highlightedState: 'is-highlighted',
    selectedState: 'is-selected'
  }
})

// choices.showDropdown()
