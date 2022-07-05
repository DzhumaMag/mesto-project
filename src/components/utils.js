const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__close');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closeByOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closeByOverlay(evt) {
  const popup = document.querySelector('.popup_opened');
  if(evt.target.classList.contains('popup')) {
    closePopup(popup)
  } 
}

function closePopupEsc(evt) {
  const popup = document.querySelector('.popup_opened');
  if(evt.key === 'Escape'){
    if(popup) {
      closePopup(popup);
    }
  }
}

export {buttonClose, buttonEdit, openPopup, closePopup, closeByOverlay, closePopupEsc};