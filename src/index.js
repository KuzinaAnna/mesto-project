import "./pages/index.css"; // импорт CSS стилей

//-------------------modal------------------------------------
import {
      buttonAddCard,
      buttonProfileEdit,
      popupUserName,
      popupUserInfo,
      profileName,
      profileUserSubtitle,
      popupEdit,
      popupPlace,
      popupAvatar,
      profileForm,
      profileAvatar,
      profileAvatarUrl,
      avatarForm,
      cardAddForm,
      formInputPlaceName,
      formInputImageLink,
      buttonSubmitPlaces,
      btnUpdateCard,
      imgName,
      imgUrl,
      popupImageCaption,
} from "./components/utils.js";
import { openPopup, closePopup } from "./components/modal.js";
import { addCard, createCard, toggleLikeBtn } from "./components/card.js";
import {
      newCard,
      config,
      checkResponse,
      renderInfo,
      renderCards,
      newInfo,
      newAvatar,
} from "./components/api";
import { disabledAddButton } from "./components/modal.js";

//----------------------валидация---------------------------
import { enableValidation } from "./components/validate.js";
enableValidation({
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button-submit",
      inactiveButtonClass: "popup__button-submit_inactive",
      inputErrorClass: "popup__input_type_error",
      errorClass: "form__input_type_error",
});

//--------------загрузка данных с сервера------------------------

Promise.all([renderInfo(), renderCards()])
      .then(([profileData, cardsData]) => {
            profileName.textContent = profileData.name;
            profileUserSubtitle.textContent = profileData.about;
            profileAvatar.src = profileData.avatar;

            cardsData.reverse().forEach(function (cardData) {
                  addCard(
                        createCard(
                              cardData.link,
                              cardData.name,
                              cardData._id,
                              cardData.likes,
                              cardData.owner._id
                        )
                  );
            });
      })
      .catch((err) => {
            console.log(err);
      });

//-----------------добавление карточки----------------------
buttonAddCard.addEventListener("click", () => {
      openPopup(popupPlace);
});
cardAddForm.addEventListener("submit", handleFormPlace);

function handleFormPlace(e) {
      e.preventDefault();
      btnUpdateCard.textContent = "Сохранение...";

      newCard(imgName.value, imgUrl.value)
            .then((cardData) => {
                  disabledAddButton(buttonSubmitPlaces);
                  closePopup(popupPlace);
                  addCard(
                        createCard(
                              cardData.link,
                              cardData.name,
                              cardData._id,
                              cardData.likes,
                              cardData.owner._id
                        )
                  );

                  console.log(cardData);
                  cardAddForm.reset();
            })
            .catch((err) => {
                  console.log(err);
            })
            .finally(() => {
                  btnUpdateCard.textContent = "Сохранить";
            });
}
//--------------------изменение инфо о себе-----------------

buttonProfileEdit.addEventListener("click", function () {
      openPopup(popupEdit);
      popupUserName.value = profileName.textContent;
      popupUserInfo.value = profileUserSubtitle.textContent;
});
profileForm.addEventListener("submit", handleProfileFormSubmit);

import { buttonSubmitInfo } from "./components/utils.js";
const btnUpdateInfo = document.querySelector(buttonSubmitInfo);

function handleProfileFormSubmit(e) {
      e.preventDefault();
      btnUpdateInfo.textContent = "Сохранение...";
      profileName.textContent = popupUserName.value;
      profileUserSubtitle.textContent = popupUserInfo.value;
      newInfo(profileName.textContent, profileUserSubtitle.textContent)
            .then(() => {
                  closePopup(popupEdit);
            })
            .catch((err) => {
                  console.log(err);
            })
            .finally(() => {
                  btnUpdateInfo.textContent = "Сохранить";
            });
}

//---------------изменение avatar-а---------------

import { buttonSubmitAvatar } from "./components/utils.js";

profileAvatar.addEventListener("click", () => {
      openPopup(popupAvatar);
});
const btnUpdateAvatar = document.querySelector(buttonSubmitAvatar);

avatarForm.addEventListener("submit", changeAvatarFormSubmit);

function changeAvatarFormSubmit(e) {
      e.preventDefault();
      btnUpdateAvatar.textContent = "Сохранение...";
      profileAvatar.src = profileAvatarUrl.value;
      newAvatar(profileAvatar.src)
            .then(() => {
                  disabledAddButton(buttonSubmitAvatar);
                  closePopup(popupAvatar);
                  avatarForm.reset();
            })
            .catch((err) => {
                  console.log(err);
            })
            .finally(() => {
                  btnUpdateAvatar.textContent = "Сохранить";
            });
}
