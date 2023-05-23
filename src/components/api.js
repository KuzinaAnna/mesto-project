export const config = {
      baseUrl: "https://nomoreparties.co/v1/plus-cohort-24",
      headers: {
            authorization: "53fbcf5d-8c75-48dc-9ae8-5060726439fa",
            "Content-Type": "application/json",
      },
};
//  Проверка ответа от сервера
export function checkResponse(res) {
      if (res.ok) {
            // console.log(res.json());
            return res.json();
      }
      return Promise.reject(res.status);
}

//   Загрузка инфо о пользователе с сервера
export const renderInfo = () => {
      return fetch(`${config.baseUrl}/users/me`, {
            method: "GET",
            headers: config.headers,
      }).then((res) => checkResponse(res));
      // .then((res) => console.log(res));
};
//   Загрузка карточек с сервера
export const renderCards = () => {
      return fetch(`${config.baseUrl}/cards`, {
            method: "GET",
            headers: config.headers,
      }).then((res) => checkResponse(res));
      // .then((res) => console.log(res));
};
//  Загрузка инфо о пользователе на сервер
export const newInfo = (name, about) => {
      return fetch(`${config.baseUrl}/users/me`, {
            method: "PATCH",
            headers: config.headers,
            body: JSON.stringify({
                  name: name,
                  about: about,
            }),
      })
            .then((res) => checkResponse(res))
            .then((res) => console.log(res));
};

// загрузка исходных карточек с сервера
import { addCard } from "./card";

// export const renderCards = () => {
//       return (
//             fetch(`${config.baseUrl}/cards`, {
//                   headers: config.headers,
//             })
//                    .then((result) => console.log(result))
//                   .then((res) => checkResponse(res))
//                   .then((arr) => {
//                         arr.forEach((item) => {
//                               addCard(item.name, item.link);
//                         });
//                   })
//       );
// };
//renderCards();

//  Добавление новой карточки
export const newCard = (name, link) => {
      return fetch(`${config.baseUrl}/cards`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                  name: name,
                  link: link,
            }),
      }).then((res) => checkResponse(res));
      // .then((result) => console.log(result));
};
//   Загрузка нового аватара
export const newAvatar = (link) => {
      return fetch(`${config.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: config.headers,
            body: JSON.stringify({
                  avatar: link,
            }),
      }).then((res) => checkResponse(res));
      //.then((res) => console.log(res));
};

//   Удаление карточки
export const deleteCardApi = (cardId) => {
      return fetch(`${config.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: config.headers,
      }).then((res) => checkResponse(res));
      //.then((result) => console.log(result));
};

//   Лайк
export const likeCard = (cardId) => {
      return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: config.headers,
      }).then(checkResponse);
};

//   Удаление лайка
export const likeCardRemove = (cardId) => {
      return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: config.headers,
      }).then(checkResponse);
};
