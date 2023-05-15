import {
    cardContainer,
    popupImageContainer,
    popupImage,
    popupImageCaption,
    imgUrl,
    imgName,
    popupPlace,
    cardAddForm,
    cardTemplate,
} from "./utils.js";
import { openPopup, closePopup } from "./modal.js";

export function addCard(titleValue, imgValue) {
    const cardTemplateElement = createCard(titleValue, imgValue);
    cardContainer.prepend(cardTemplateElement);
}

export function createCard(titleValue, imgValue) {
    const cardTemplateElement = cardTemplate.cloneNode(true);
    const photo = cardTemplateElement.querySelector(".elements__photo");
    const title = cardTemplateElement.querySelector(".elements__title");

    photo.src = imgValue;
    title.textContent = titleValue;
    photo.alt = titleValue;

    cardTemplateElement
        .querySelector(".elements__like-btn")
        .addEventListener("click", function (e) {
            e.target.classList.toggle("elements__like-btn_active");
        });

    cardTemplateElement
        .querySelector(".elements__delete-btn")
        .addEventListener("click", function (e) {
            const deleteCardItem = e.target.closest(".elements__item");
            deleteCardItem.remove();
        });

    photo.addEventListener("click", function () {
        openPopup(popupImageContainer);
        popupImage.src = imgValue;
        popupImage.alt = titleValue;
        popupImageCaption.textContent = titleValue;
    });

    return cardTemplateElement;
}

import { buttonSubmitPlaces } from "./utils.js";
import { disabledAddButton } from "./modal.js";

import { newCard } from "./api.js";

export function handleFormPlace(e) {
    e.preventDefault();
    const titleValue = imgName.value;
    const imgValue = imgUrl.value;
    addCard(titleValue, imgValue);

    newCard(titleValue, imgValue);

    disabledAddButton(buttonSubmitPlaces);
    closePopup(popupPlace);
    cardAddForm.reset();
}
