import "./pages/index.css"; // импорт CSS стилей

//-------------------modal------------------------------------
import {
    buttonAddCard,
    buttonChangeAvatar,
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
} from "./components/utils.js";
import { openPopup, closePopup } from "./components/modal.js";

buttonAddCard.addEventListener("click", () => {
    openPopup(popupPlace);
});

buttonChangeAvatar.addEventListener("click", () => {
    openPopup(popupAvatar);
});

buttonProfileEdit.addEventListener("click", function () {
    openPopup(popupEdit);
    popupUserName.value = profileName.textContent;
    popupUserInfo.value = profileUserSubtitle.textContent;
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

// const btnAvatar = document.querySelector(buttonSubmitAvatar);

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = popupUserName.value;
    profileUserSubtitle.textContent = popupUserInfo.value;
    closePopup(popupEdit);
    newInfo(profileName.textContent, profileUserSubtitle.textContent);
    renderInfo(config);
}

//---------------avatar---------------
import { buttonSubmitAvatar } from "./components/utils.js";
import { disabledAddButton } from "./components/modal.js";
import { newAvatar } from "./components/api.js";
import { replaceText } from "./components/api.js";

function changeAvatarFormSubmit(e) {
    e.preventDefault();
    profileAvatar.src = profileAvatarUrl.value;
    disabledAddButton(buttonSubmitAvatar);
    // replaceText(btnAvatar, "Сохранение...");
    closePopup(popupAvatar);
    // replaceText(btnAvatar, "Сохранить");
    avatarForm.reset();
    newAvatar(profileAvatar.src);
}

avatarForm.addEventListener("submit", changeAvatarFormSubmit);

//-----------------------card-----------------------------------
import { cardAddForm, initialCards } from "./components/utils.js";
import { addCard, handleFormPlace } from "./components/card.js";

cardAddForm.addEventListener("submit", handleFormPlace);

initialCards.forEach(function (initialCards) {
    addCard(initialCards.name, initialCards.link);
});

//-----------------------validate-----------------------------------
import { enableValidation } from "./components/validate.js";
enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-submit",
    inactiveButtonClass: "popup__button-submit_inactive",
    inputErrorClass: "popup__input_type_error",
    errorClass: "form__input_type_error",
});
//----------------------------------------------------
import {
    config,
    renderInfo,
    renderCards,
    newInfo,
    newCard,
} from "./components/api";

renderInfo(config);
