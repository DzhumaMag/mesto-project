function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('click', closeByOverlay);
  }

  function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('click', closeByOverlay)
  }


  function closeByOverlay(evt) {
    if(evt.target.classList.contains('popup')) {
      closePopup(popup)
    } 
  }
  
  function closePopupEsc(evt) {
    if(evt.key === 'Escape'){
    const popup = document.querySelector('.popup_opened');
      if(popup) {
        closePopup(popup);
      }
    }
  }

  export {openPopup, closePopup, closeByOverlay, closePopupEsc};
 