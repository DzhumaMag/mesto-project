import { validationConfig } from "./utils";

//показать ошибку
const showError = (errorElement, inputElement, config) => {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

// скрыть ошибку
const hideError = (errorElement, inputElement, config) => {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
//проверяет инпут на валидность 
  
const checkInputValidity = (inputElement, formElement, config) => {
      const isInputValid = inputElement.validity.valid;
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      if(!isInputValid) {
        showError(errorElement, inputElement, config)
      } else {
        hideError(errorElement, inputElement, config)
      }
  }
  
//вкл выкл кнопки 
const toggleButtonState = (button, isActive = false, config) => {
    if(isActive) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    }
   }
  
//ф-я установки слушателей 
  
const setEventListener = (formElement, config) => {
  
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButton = formElement.querySelector(config.submitButtonSelector);
  
  
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
  });
      [...inputList].forEach(input => {
        input.addEventListener('input', ()=> {
            checkInputValidity(input, formElement, config);
            toggleButtonState(submitButton, formElement.checkValidity(), config);
        })
      })
  };
  
  
//запуск валидации , перебор форм и запуск валидации на нужной форме
  
const enableValidation = (config) => {
      const forms = document.querySelectorAll(config.formSelector);
      [...forms].forEach(form => {
          setEventListener(form, config)
        })
      }
 
  
enableValidation(validationConfig);

export {showError, hideError, checkInputValidity, toggleButtonState, setEventListener, enableValidation}