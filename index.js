const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__close');
const profilePopup = document.querySelector('.popup_type_profile-edit');
const buttonEditPlace = document.querySelector('.profile__add-button');
const buttonPlaceClose = document.querySelector('.popup__close_place');
const placePopup = document.querySelector('.popup_place');
const formPlace = document.querySelector('.popup_type_place');
const cardList = document.querySelector('.cards')
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const formProfile = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_profession');
const zoomCloseButton = document.querySelector('.popup__close_type_zoom');
const imagePopup = document.querySelector('.popup_type_zoom');
const imageBigSize = document.querySelector('.popup__image');
const popupZoomTitle = document.querySelector('.popup__title_type_zoom')
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLinkPlace = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
buttonEdit.addEventListener("click", ()=> openPopup(profilePopup));

buttonEdit.addEventListener("click", ()=> openPropfilePopup(profilePopup));

buttonEditPlace.addEventListener("click", ()=> openPopup(placePopup));

buttonClose.addEventListener("click", ()=> closePopup(profilePopup));

buttonPlaceClose.addEventListener("click", ()=> closePopup(placePopup));

zoomCloseButton.addEventListener("click", ()=> closePopup(imagePopup)); // спасибо большое

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

const deleteImage = function(element) {
  element.remove();
};

const createCard = function(data) {
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
const addCard = function(data, container) {
  const card = createCard(data);
  container.prepend(card);
}

initialCards.forEach(function(item) {
    addCard(item, cardList);
});

function openPropfilePopup() { 

    inputName.value = profileName.textContent; 
    inputJob.value = profileJob.textContent; 

    openPopup(profilePopup);
  };

function fixProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(profilePopup);
}

formProfile.addEventListener("submit", fixProfile);


const renderCard = function(evt) {
    evt.preventDefault();

const cardInfo = { 
    name: inputPlace.value, 
    link: inputLinkPlace.value,
  };

  formPlace.reset();

  addCard(cardInfo, cardList);
  closePopup(placePopup);

}
formPlace.addEventListener("submit", renderCard);
