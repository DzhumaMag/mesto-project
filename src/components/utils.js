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

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
  errorClass: 'form__input-error'
};

export {initialCards, cardList, inputPlace, inputLinkPlace, buttonCreate, buttonClose, buttonEdit, buttonEditPlace, buttonPlaceClose, zoomCloseButton, profilePopup, 
  inputJob, profileName, inputName, profileJob, buttonSave, formPlace, formProfile, cardTemplate, imageBigSize, popupZoomTitle, placePopup, imagePopup, validationConfig};