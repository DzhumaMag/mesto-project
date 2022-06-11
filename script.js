const buttonEdit = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const buttonEditPlace = document.querySelector('.profile__add-button');
const closeButtonPlace = document.querySelector('.popup__close_place');
const popupPlace = document.querySelector('.popup_place');
const formPlace = document.querySelector('.popup_type_place');
const cardList = document.querySelector('.cards')
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const formProfile = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_profession');
const closeZoom = document.querySelector('.popup__close_type_zoom');
const zoom = document.querySelector('.popup_type_zoom');
const popupImage = document.querySelector('.popup__image');
const popupZoomTitle = document.querySelector('.popup__title_type_zoom');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
buttonEdit.addEventListener("click", function(){
  popup.classList.add('popup_opened');
});
buttonEditPlace.addEventListener("click", function(){
  popupPlace.classList.add('popup_opened');
});


closeButton.addEventListener("click", function(){
  popup.classList.remove('popup_opened'); 
})

closeButtonPlace.addEventListener("click", function(){
  popupPlace.classList.remove('popup_opened'); 
})

closeZoom.addEventListener("click", function() {
  zoom.classList.remove('popup_opened');
});

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
  

    cardTrash.addEventListener("click", ()=> deleteImage(cardElement));
    
    cardPhoto.src = data.link;
    cardPlace.textContent = data.name;

      cardPhoto.addEventListener("click", function() {
      popupImage.src = cardPhoto.src;
      popupZoomTitle.textContent = cardPlace.textContent;
      zoom.classList.add('popup_opened');
      });
      // closeZoom.addEventListener("click", function() {
      //   zoom.classList.remove('popup_opened');
      // });

      cardLike.addEventListener("click", function(evt) {
        evt.target.classList.toggle('card__like_active');
      });

    return cardElement;
};
const addCard = function(data, container) {
  const card = createCard(data);
  container.prepend(card);
}

initialCards.forEach(function(item) {
    addCard(item, cardList);
});


inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function fixProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popup);
}

formProfile.addEventListener("submit", fixProfile);

const renderCard = function(evt) {
  evt.preventDefault();
  evt.target.reset();
  const inputPlace = evt.target.querySelector('.popup__input_type_place');
  const inputLinkPlace = evt.target.querySelector('.popup__input_type_link');
  const cardInfo = { 
    name: inputPlace.value, 
    link: inputLinkPlace.value,
  };
  addCard(cardInfo, cardList);
  closePopup(popupPlace);
}
formPlace.addEventListener("submit", renderCard);
