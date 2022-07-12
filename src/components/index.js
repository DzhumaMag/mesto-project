import '../pages/index.css';

import { initialCards, cardList, inputPlace, inputLinkPlace, buttonCreate, buttonClose, buttonEdit, buttonEditPlace, buttonPlaceClose, zoomCloseButton, 
profilePopup, inputJob, profileName, inputName, profileJob, buttonSave, formPlace, formProfile, placePopup,imagePopup, validationConfig, avatarPopup,
buttonAvatarClose, buttonSaveAvatar, inputAvatar, avatarImage, buttonEditAvatar, formAvatar, loading} from './utils';

import { createCard, updateLikeState } from './card';

import {checkInputValidity, toggleButtonState } from './validate';

import {openPopup, closePopup} from './modal';

import {getAllCards, appendCard, editCard, getProfileInfo, getAllInfo, editProfileInfo, editProfileImage, changeLikeStatus } from './api';

buttonEdit.addEventListener("click", ()=> openPopup(profilePopup));

buttonEdit.addEventListener("click", ()=> openProfilePopup());

buttonEditPlace.addEventListener("click", ()=> openPopup(placePopup));

buttonClose.addEventListener("click", ()=> closePopup(profilePopup));

buttonPlaceClose.addEventListener("click", ()=> closePopup(placePopup));

zoomCloseButton.addEventListener("click", ()=> closePopup(imagePopup));

buttonEditAvatar.addEventListener("click", ()=> openPopup(avatarPopup));

buttonAvatarClose.addEventListener("click", ()=> closePopup(avatarPopup));

let userId = null;

getAllInfo()
.then(([cards, user]) => {
  profileName.textContent = user.name;
  profileJob.textContent = user.about;
  avatarImage.src = user.avatar;
  userId = user._id 

  cards.reverse().forEach((data) => {
    addCard(data, cardList, userId)
  })

})
.catch (err => {
  console.log(err);
})


function openProfilePopup() { 
    inputName.value = profileName.textContent; 
    inputJob.value = profileJob.textContent; 
    checkInputValidity(inputName, formProfile,validationConfig);
    checkInputValidity(inputJob, formProfile,validationConfig);
    toggleButtonState(buttonSave, true, validationConfig);

    openPopup(profilePopup);
  };


const handleChangeLikeStatus = (cardId, isLiked, cardElement) => {
  changeLikeStatus(cardId, isLiked)
    .then((dataFromServer) => {
      updateLikeState(cardElement, dataFromServer.likes, userId)
    })
    .catch (err => {
      console.log(err);
    })
}

const addCard = (data, container, userId) => {
    const card = createCard(data, userId, handleChangeLikeStatus);
    container.prepend(card);
}

  
const renderCard = (evt) => {
  evt.preventDefault();
  loading(buttonCreate, true)
  const cardInfo = { 
    name: inputPlace.value, 
    link: inputLinkPlace.value,
    owner: {_id: userId},
    
  }  
  appendCard(cardInfo)
    .then((dataFromServer) => {
      formPlace.reset();
      addCard(dataFromServer, cardList, userId);
      toggleButtonState(buttonCreate, false, validationConfig);
      closePopup(placePopup);
      
  }) 
    .catch (err => {
      console.log(err);
  })
  .finally(()=> loading(buttonCreate, false, false))
  
}



function fixProfile(evt) {
    evt.preventDefault();
    loading(buttonSave, true);

    const dataId = {
      name: profileName.textContent, 
      about: profileJob.textContent, 
      link: 'users/me'}

    editProfileInfo(dataId)
      .then((dataFromServer)=> {
        profileName.textContent = inputName.value,
        profileJob.textContent = inputJob.value
        closePopup(profilePopup);
        
    } )
      .catch (err => {
        console.log(err);
      })
      .finally(()=> loading(buttonSave, false))
    
}


function addAvatar(evt) {
  evt.preventDefault();

  loading(buttonSaveAvatar, true)
  avatarImage.src = inputAvatar.value;
  avatarImage.alt = inputAvatar.name;
  const dataId = {
    avatar: avatarImage.src
  }
 
  

  editProfileImage(dataId)
    .then((dataFromServer) =>{
    toggleButtonState(buttonSaveAvatar, false, validationConfig);

    avatarImage.src = dataFromServer.avatar
    formAvatar.reset();
    closePopup(avatarPopup);

  })
  .catch (err => {
    console.log(err);
  })
  .finally(()=> loading(buttonSaveAvatar, false))
}
  



formAvatar.addEventListener("submit", addAvatar);

formProfile.addEventListener("submit", fixProfile);

formPlace.addEventListener("submit", renderCard);


export { userId };