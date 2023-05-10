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

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = popupUserName.value;
    profileUserSubtitle.textContent = popupUserInfo.value;
    closePopup(popupEdit);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

function changeAvatarFormSubmit(e) {
    e.preventDefault();
    profileAvatar.src = profileAvatarUrl.value;
    closePopup(popupAvatar);
    avatarForm.reset();
}

avatarForm.addEventListener("submit", changeAvatarFormSubmit);

//-----------------------card-----------------------------------
import { cardAddForm, initialCards } from "./components/utils.js";
import { addCard, handleFormPlace } from "./components/card.js";

cardAddForm.addEventListener("submit", handleFormPlace);

initialCards.forEach(function (initialCards) {
    addCard(initialCards.link, initialCards.name);
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
