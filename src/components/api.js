const config = {
    url: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
    headers: {
       "Content-type": "application/json",
        "Authorization": "3edacc12-bdb3-4557-94ae-de67f97aeffb"
    },
}

 const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
 }


 //подгрузка карточек с сервера

export function getAllCards() {
    return fetch(`${config.url}/cards`, {
        headers: config.headers
    })
    .then(onResponce)
}

//получение информации о пользователе 
export function getProfileInfo() {
    return fetch(`${config.url}/users/me`, {
        headers: config.headers
    })
    .then(onResponce)
 }
export function getAllInfo() {
    return Promise.all([getAllCards(), getProfileInfo()])
} 
// добавление новой карточки
export function appendCard(dataId) {
    return fetch(`${config.url}/cards`, {
        headers: config.headers,
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(dataId)    
    })

        .then(onResponce)
}

// удаление карточки
export function removeCard(dataId) {

        return fetch(`${config.url}/cards/${dataId}`, {
            headers: config.headers,
            method: 'DELETE'
    })
    .then(onResponce)
}


// редактирование инфы профиля
export function editProfileInfo(dataId) {
    return fetch(`${config.url}/${dataId.link}`, {
        headers: config.headers,
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(dataId)
    })
    .then(onResponce)
}



// редактирование инфы профиля
export function editProfileImage(dataId) {
    return fetch(`${config.url}/users/me/avatar`, {
        headers: config.headers,
        method: 'PATCH',
        body: JSON.stringify(dataId)
    })
    .then(onResponce)
}

export function changeLikeStatus(dataId, like) {
    return fetch(`${config.url}/cards/likes/${dataId}`, {
        method: like?"DELETE" : "PUT",
        headers: config.headers,
     }).then(onResponce)
}