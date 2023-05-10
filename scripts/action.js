//------------------------------------popup-------------------------------------------------//
//ф-ция открытия модального окна
function openPopup(element) {
    element.classList.add("popup_opened");
}
//ф-ия закрытия модального окна
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function closeModal(e) {
    if (
        e.target.classList.contains("popup__close-button") ||
        e.target.classList.contains("popup")
    ) {
        closePopup(e.target.closest(".popup"));
    }
}

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

closePopupBtns.forEach((modal) => {
    modal.addEventListener("click", closeModal);
});

modals.forEach((modal) => {
    modal.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (e) => {
    modals.forEach((modal) => {
        if (e.key === "Escape" && modal.classList.contains("popup_opened")) {
            modal.classList.remove("popup_opened");
        }
    });
});

//------------------------------------edit info-------------------------------------------------//
// Обработчик «отправки» формы
function handleProfileFormSubmit(e) {
    e.preventDefault();

    profileName.textContent = popupUserName.value;
    profileUserSubtitle.textContent = popupUserInfo.value;

    closePopup(popupEdit);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

//обработчик отправки формы для изменения аватара
function changeAvatarFormSubmit(e) {
    e.preventDefault();

    profileAvatar.src = profileAvatarUrl.value;

    closePopup(popupAvatar);
}

avatarForm.addEventListener("submit", changeAvatarFormSubmit);

//------------------------------------добавление карточки-------------------------------------------------//

function addCard(imgValue, titleValue) {
    const cardTemplateElement = createCard(imgValue, titleValue);
    cardContainer.prepend(cardTemplateElement);
}

function createCard(imgValue, titleValue) {
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

function handleFormPlace(e) {
    e.preventDefault();
    imgValue = imgUrl.value;
    titleValue = imgName.value;
    addCard(imgValue, titleValue);
    closePopup(popupPlace);
    cardAddForm.reset();
}

cardAddForm.addEventListener("submit", handleFormPlace);

//------------------------------------6 исходных карточек-------------------------------------------------//

initialCards.forEach(function (initialCards) {
    addCard(initialCards.link, initialCards.name);
});
