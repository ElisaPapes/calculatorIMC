import { Modal } from './modal.js' 
import { alertError } from './error.js'
import { IMC, notNumber } from './utils.js'

// Variables

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');


form.onsubmit = function(event) {
  event.preventDefault();
  
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  console.log(showAlertError);

  if(showAlertError){
    alertError.open()
    return;
  }

  alertError.close();
  
  const result = IMC(weight, height);
  displayMessage(result);
}


window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close();
  }
}

function displayMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message; 
  Modal.open();
}

inputWeight.oninput = () => alertError.close();

inputHeight.oninput = () => alertError.close();
