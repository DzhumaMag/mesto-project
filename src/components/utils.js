const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardList = document.querySelector('.cards');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLinkPlace = document.querySelector('.popup__input_type_link');
const buttonCreate = document.querySelector('.popup__save_button_create');
const buttonClose = document.querySelector('.popup__close');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonEditPlace = document.querySelector('.profile__add-button');
const buttonPlaceClose = document.querySelector('.popup__close_place');
const zoomCloseButton = document.querySelector('.popup__close_type_zoom');
const profilePopup = document.querySelector('.popup_type_profile-edit');
const inputJob = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.profile__profession');
const buttonSave = document.querySelector('.popup__save_button_save');
const formPlace = document.querySelector('.popup_type_place');
const formProfile = document.querySelector('.popup_type_profile');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const imageBigSize = document.querySelector('.popup__image');
const popupZoomTitle = document.querySelector('.popup__title_type_zoom');
const placePopup = document.querySelector('.popup_place');
const imagePopup = document.querySelector('.popup_type_zoom');
const avatarPopup = document.querySelector('.popup__avatar');
const buttonEditAvatar = document.querySelector('.profile__avatar-edit');
const buttonAvatarClose = document.querySelector('.popup__close_type_avatar');
const buttonSaveAvatar = document.querySelector('.popup__save_button_avatar');
const formAvatar = document.querySelector('.popup__body_type_avatar');
const inputAvatar = document.querySelector('.popup__input_type_avatar');
const avatarImage = document.querySelector('.profile__photo');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
  errorClass: 'form__input-error'
};

function loading(button, load, type = true) {
  
  if (load) {
button.textContent = "Сохранение...";
  } else {
    if (type) {
      button.textContent = "Сохранить";
    } else {
      button.textContent = "Создать";
    }
  }
}

export {initialCards, cardList, inputPlace, inputLinkPlace, buttonCreate, buttonClose, buttonEdit, buttonEditPlace, buttonPlaceClose, zoomCloseButton, profilePopup, 
  buttonEditAvatar, avatarPopup, inputJob, profileName, inputName, profileJob, buttonSave, formPlace, formProfile, cardTemplate, imageBigSize, 
  buttonAvatarClose, buttonSaveAvatar, formAvatar, inputAvatar, avatarImage, popupZoomTitle, placePopup, imagePopup, validationConfig, loading};