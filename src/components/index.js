import '../pages/index.css';

import {buttonClose, buttonEdit, openPopup, closePopup} from './utils';

import { placePopup, imagePopup, renderCard } from './card';

import { formPlace, formProfile} from './validate';

import { profilePopup, fixProfile, openProfilePopup } from './modal';
const buttonEditPlace = document.querySelector('.profile__add-button');
const buttonPlaceClose = document.querySelector('.popup__close_place');
const zoomCloseButton = document.querySelector('.popup__close_type_zoom');

buttonEdit.addEventListener("click", ()=> openPopup(profilePopup));

buttonEdit.addEventListener("click", ()=> openProfilePopup());

buttonEditPlace.addEventListener("click", ()=> openPopup(placePopup));

buttonClose.addEventListener("click", ()=> closePopup(profilePopup));

buttonPlaceClose.addEventListener("click", ()=> closePopup(placePopup));

zoomCloseButton.addEventListener("click", ()=> closePopup(imagePopup));

formProfile.addEventListener("submit", fixProfile);

formPlace.addEventListener("submit", renderCard);
