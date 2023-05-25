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
} from "./components/constants.js";
import { openPopup, closePopup } from "./components/modal.js";
import { addCard, createCard, toggleLikeBtn } from "./components/card.js";
import {
      postCard,
      config,
      checkResponse,
      renderInfo,
      renderCards,
      updateInfo,
      updateAvatar,
} from "./components/api";
import { disableButton } from "./components/modal.js";

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
export let userId = "";
Promise.all([renderInfo(), renderCards()])
      .then(([profileData, cardsData]) => {
            profileName.textContent = profileData.name;
            profileUserSubtitle.textContent = profileData.about;
            profileAvatar.src = profileData.avatar;
            userId = profileData._id;
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

      postCard(imgName.value, imgUrl.value)
            .then((cardData) => {
                  closePopup(popupPlace);
                  disableButton(btnUpdateCard);
                  addCard(
                        createCard(
                              cardData.link,
                              cardData.name,
                              cardData._id,
                              cardData.likes,
                              cardData.owner._id
                        )
                  );

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

import { buttonSubmitInfo } from "./components/constants.js";
const btnUpdateInfo = document.querySelector(buttonSubmitInfo);

function handleProfileFormSubmit(e) {
      e.preventDefault();
      btnUpdateInfo.textContent = "Сохранение...";
      updateInfo(popupUserName.value, popupUserInfo.value)
            .then(() => {
                  profileName.textContent = popupUserName.value;
                  profileUserSubtitle.textContent = popupUserInfo.value;
                  closePopup(popupEdit);
                  profileForm.reset();
            })
            .catch((err) => {
                  console.log(err);
            })
            .finally(() => {
                  btnUpdateInfo.textContent = "Сохранить";
            });
}

//---------------изменение avatar-а---------------

import { buttonSubmitAvatar } from "./components/constants.js";

profileAvatar.addEventListener("click", () => {
      openPopup(popupAvatar);
});

avatarForm.addEventListener("submit", changeAvatarFormSubmit);

function changeAvatarFormSubmit(e) {
      e.preventDefault();
      buttonSubmitAvatar.textContent = "Сохранение...";
      updateAvatar(profileAvatarUrl.value)
            .then(() => {
                  profileAvatar.src = profileAvatarUrl.value;
                  disableButton(buttonSubmitAvatar);
                  closePopup(popupAvatar);
                  avatarForm.reset();
            })
            .catch((err) => {
                  console.log(err);
            })
            .finally(() => {
                  buttonSubmitAvatar.textContent = "Сохранить";
            });
}
