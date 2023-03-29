// Objeto literal, abaixo, mesma coisa que:
// const Modal = {
  //   open: function() {};
  //   close: function() {};
  // }
  
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2 span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  },
}

// Quando a arrow function tem somente uma linha, não precisa de chaves;
Modal.buttonClose.onclick = () => {
  Modal.close();
}