const buttonsOrder = document.querySelectorAll('.product__button-order')
const buttonConsultation = document.querySelector('.header__consultation')
const overlays = document.querySelectorAll('.overlay')
const overlayOrder = document.querySelector('.overlay_order')
const overlayConsultation = document.querySelector('.overlay_consultation')
const order = overlayOrder.querySelector('.modal__order')


buttonsOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    order.value = buttonOrder.dataset.order;
    
  })
});

buttonConsultation.addEventListener('click', () => {
  overlayConsultation.classList.add('overlay_active')
});

overlays.forEach(overlay => {
  overlay.addEventListener('click', event => {
  if (event.target === overlay ||
      event.target.closest('.modal__close')) {
        overlay.classList.remove('overlay_active')
  }
})
});
