// авторизация

export const config = {
    baseUrl: "https://nomoreparties.co/v1/plus-cohort-24",
    headers: {
        authorization: "53fbcf5d-8c75-48dc-9ae8-5060726439fa",
        "Content-Type": "application/json",
    },
};

// загрузка инфо о пользователе с сервера

export const renderInfo = (config) => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
        .then(checkResponse)
        .then((res) => console.log(res));
};

// проверка ответа от сервера

export function checkResponse(res) {
    if (res.ok) {
        // console.log(res.json());
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

// загрузка инфо о пользователе на сервер

export const newInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about,
        }),
    }).then((res) => checkResponse(res));
    // .then((res) => console.log(res));
};

//ожидание загрузки информации
export function replaceText(btnAvatar, text) {
    btnAvatar.textContent = text;
    console.log(btnAvatar);
}

//  функции загрузки исходных карточек с сервера

import { addCard } from "./card";

export const renderCards = () => {
    return (
        fetch(`${config.baseUrl}/cards`, {
            headers: config.headers,
        })
            .then(checkResponse)
            // .then((result) => console.log(result))
            .then((arr) => {
                arr.forEach((item) => {
                    addCard(item.name, item.link);
                });
            })
    );
};
renderCards();

//загрузка нового аватара
export const newAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar: link,
        }),
    }).then(checkResponse);
    // .then((res) => console.log(res));
};

// добавление новой карточки

export const newCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link,
        }),
    })
        .then(checkResponse)
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
};
