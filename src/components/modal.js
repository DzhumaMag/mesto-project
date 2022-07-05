import {formProfile, validationConfig, checkInputValidity, toggleButtonState} from './validate';
import { openPopup, closePopup } from './utils';
const profilePopup = document.querySelector('.popup_type_profile-edit');
const inputJob = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__profession');

function openProfilePopup() { 
    const buttonSave = document.querySelector('.popup__save_button_save');
    inputName.value = profileName.textContent; 
    inputJob.value = profileJob.textContent; 
    checkInputValidity(inputName, formProfile,validationConfig);
    checkInputValidity(inputJob, formProfile,validationConfig);
    toggleButtonState(buttonSave, true, validationConfig);

    openPopup(profilePopup);
  };

function fixProfile(evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;

    closePopup(profilePopup);
}

  export {profileJob, inputName, profileName , inputJob,  profilePopup, fixProfile, openProfilePopup};
 