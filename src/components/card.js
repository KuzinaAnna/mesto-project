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

export function addCard(imgValue, titleValue) {
    const cardTemplateElement = createCard(imgValue, titleValue);
    cardContainer.prepend(cardTemplateElement);
}

export function createCard(imgValue, titleValue) {
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
export function handleFormPlace(e) {
    e.preventDefault();
    const imgValue = imgUrl.value;
    const titleValue = imgName.value;
    addCard(imgValue, titleValue);
    closePopup(popupPlace);
    cardAddForm.reset();
}
