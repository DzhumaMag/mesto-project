import '../pages/index.css';

import { initialCards, cardList, inputPlace, inputLinkPlace, buttonCreate, buttonClose, buttonEdit, buttonEditPlace, buttonPlaceClose, zoomCloseButton, 
profilePopup, inputJob, profileName, inputName, profileJob, buttonSave, formPlace, formProfile, placePopup, validationConfig} from './utils';

import { createCard } from './card';

import {checkInputValidity, toggleButtonState } from './validate';

import {openPopup, closePopup} from './modal';


buttonEdit.addEventListener("click", ()=> openPopup(profilePopup));

buttonEdit.addEventListener("click", ()=> openProfilePopup());

buttonEditPlace.addEventListener("click", ()=> openPopup(placePopup));

buttonClose.addEventListener("click", ()=> closePopup(profilePopup));

buttonPlaceClose.addEventListener("click", ()=> closePopup(placePopup));

zoomCloseButton.addEventListener("click", ()=> closePopup(imagePopup));


function openProfilePopup() { 
    inputName.value = profileName.textContent; 
    inputJob.value = profileJob.textContent; 
    checkInputValidity(inputName, formProfile,validationConfig);
    checkInputValidity(inputJob, formProfile,validationConfig);
    toggleButtonState(buttonSave, true, validationConfig);

    openPopup(profilePopup);
  };


  const addCard = (data, container) => {
    const card = createCard(data);
    
    container.prepend(card);
}
  
initialCards.forEach(function(item) {
      addCard(item, cardList);
});

  
const renderCard = (evt) => {
  evt.preventDefault();
  const cardInfo = { 
    name: inputPlace.value, 
    link: inputLinkPlace.value,
  }  
  formPlace.reset();

  addCard(cardInfo, cardList);
  toggleButtonState(buttonCreate, false, validationConfig);
  
  closePopup(placePopup);
}



function fixProfile(evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;

    closePopup(profilePopup);
}


formProfile.addEventListener("submit", fixProfile);

formPlace.addEventListener("submit", renderCard);
