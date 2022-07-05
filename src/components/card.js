import { openPopup, closePopup } from "./utils";
import { formPlace, toggleButtonState, validationConfig} from "./validate"; 

const inputPlace = document.querySelector('.popup__input_type_place');
const inputLinkPlace = document.querySelector('.popup__input_type_link');
const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const imageBigSize = document.querySelector('.popup__image');
const popupZoomTitle = document.querySelector('.popup__title_type_zoom');
const placePopup = document.querySelector('.popup_place');
const imagePopup = document.querySelector('.popup_type_zoom');

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

  
const deleteImage = (element) => {
    element.remove();
};

const createCard = (data) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardPhoto = cardElement.querySelector('.card__photo');
    const cardPlace = cardElement.querySelector('.card__place');
    const cardTrash = cardElement.querySelector('.card__trash');
    const cardLike = cardElement.querySelector('.card__like');
  
    cardPhoto.src = data.link;
    cardPhoto.alt = data.name;
    cardPlace.textContent = data.name;
  
    cardPhoto.addEventListener("click", function() {
    imageBigSize.src = cardPhoto.src;
    imageBigSize.alt = cardPlace.textContent;
    popupZoomTitle.textContent = cardPlace.textContent;
      
    openPopup(imagePopup);
      
});   
      
    cardLike.addEventListener("click", function(evt) {
        evt.target.classList.toggle('card__like_active');
    });
      
    cardTrash.addEventListener("click", ()=> deleteImage(cardElement));
  
    return cardElement;
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
  const buttonCreate = document.querySelector('.popup__save_button_create');
  const cardInfo = { 
    name: inputPlace.value, 
    link: inputLinkPlace.value,
  }  
  formPlace.reset();

  addCard(cardInfo, cardList);
  toggleButtonState(buttonCreate, false, validationConfig);
  
  closePopup(placePopup);
}

export { inputPlace, inputLinkPlace, cardList, cardTemplate, imageBigSize, popupZoomTitle, placePopup, imagePopup, createCard, deleteImage, addCard, initialCards, renderCard}