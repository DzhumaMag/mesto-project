import { openPopup } from "./modal";
import { removeCard, likedCard } from "./api";


import { cardTemplate, imageBigSize, popupZoomTitle, imagePopup } from "./utils";
// import { data } from "autoprefixer";
// import { getAllCards } from "./api";


const deleteImage = (data, element) => {
    console.log(data);
    removeCard(data._id).then((dataFromServer) => {
        element.remove()
    });
};

const isLiked = (likeArray, userId) => {
    return Boolean(likeArray.find((likeobj) => {
        return likeobj._id === userId
    }))
}

export const updateLikeState = (cardElement, likeArray, userId) => {
    const cardLike = cardElement.querySelector('.card__like-button');
    const likeCounter = cardElement.querySelector('.card__like-counter');
    likeCounter.textContent = likeArray.length;


    if (isLiked(likeArray, userId)) {
        cardLike.classList.add('card__like-button_active')
    } else {
        cardLike.classList.remove('card__like-button_active')
    }
    
}


const createCard = (data, userId,  handleChangeLikeStatus) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardPhoto = cardElement.querySelector('.card__photo');
    const cardPlace = cardElement.querySelector('.card__place');
    const cardTrash = cardElement.querySelector('.card__trash');
    const cardLike = cardElement.querySelector('.card__like-button');
    const likeCounter = cardElement.querySelector('.card__like-counter');
    likeCounter.textContent = 0;
    

    cardPhoto.src = data.link;
    cardPhoto.alt = data._id;
    cardPlace.textContent = data.name;


    updateLikeState(cardElement, data.likes, userId)

    if (data.owner._id === userId) {
        cardTrash.style.display = "block";
    }

    cardPhoto.addEventListener("click", function() {
    imageBigSize.src = cardPhoto.src;
    imageBigSize.alt = cardPlace.textContent;
    popupZoomTitle.textContent = cardPlace.textContent;
      
    openPopup(imagePopup);
      
});   
    cardLike.addEventListener ("click", () => {handleChangeLikeStatus(data._id, cardLike.classList.contains('card__like-button_active'), cardElement)})
    cardTrash.addEventListener("click", ()=> deleteImage(data, cardElement));
  
    return cardElement;
    };

export {createCard, deleteImage, isLiked}