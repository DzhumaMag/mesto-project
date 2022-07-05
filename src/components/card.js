import { openPopup } from "./modal";

import { cardTemplate, imageBigSize, popupZoomTitle, imagePopup } from "./utils";

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

export {createCard, deleteImage}