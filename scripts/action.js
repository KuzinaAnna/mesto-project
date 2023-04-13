//------------------------------------popup-------------------------------------------------//
//ф-ция открытия модального окна
function openPopup(element) {
    element.classList.add("popup_opened");
}
//ф-ия закрытия модального окна
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function closeModal(evt) {
    if (
        evt.target.classList.contains("popup__close-button") ||
        evt.target.classList.contains("popup")
    ) {
        closePopup(evt.target.closest(".popup"));
    }
}

buttonAddCard.addEventListener("click", (evt) => {
    const data = evt.target.dataset.modalOpen;
    modals.forEach((modal) => {
        if (modal.dataset.modal === data) {
            openPopup(modal);
        }
    });
});

buttonProfileEdit.addEventListener("click", function (evt) {
    const data = evt.target.dataset.modalOpen;
    modals.forEach((modal) => {
        if (modal.dataset.modal === data) {
            openPopup(modal);
            popupUserName.value = profileName.textContent;
            popupUserInfo.value = profileUserSubtitle.textContent;
        }
    });
});

modals.forEach((closePopupBtn) => {
    closePopupBtn.addEventListener("click", (evt) => closeModal(evt));
});
//------------------------------------edit info-------------------------------------------------//
// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    userName = document.querySelector("._userName").value;
    userInfo = document.querySelector("._userInfo").value;

    document.querySelector(".profile__name").textContent = userName;
    document.querySelector(".profile__info-subtitle").textContent = userInfo;

    closePopup(popupEdit);
    profileForm.reset();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

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
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("elements__like-btn_active");
        });

    cardTemplateElement
        .querySelector(".elements__delete-btn")
        .addEventListener("click", function (evt) {
            const deleteCardItem = evt.target.closest(".elements__item");
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

function handleFormPlace(evt) {
    evt.preventDefault();
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
