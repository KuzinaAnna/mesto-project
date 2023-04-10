//------------------------------------edit info-------------------------------------------------//
// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let userName = document.querySelector("._userName").value;
    let userInfo = document.querySelector("._userInfo").value;

    document.querySelector(".profile__name").textContent = userName;
    document.querySelector(".profile__info-subtitle").textContent = userInfo;
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

//------------------------------------popup-------------------------------------------------//
//ф-ция открытия модального окна
function openModal(element) {
    element.classList.add("popup_opened");
}
//ф-ция закрытия модального окна
function closeModal(evt) {
    if (
        evt.target.classList.contains("popup__close-button") ||
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__button-submit")
    ) {
        evt.target.closest(".popup").classList.remove("popup_opened");
    }
}

modalBtns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        let data = evt.target.dataset.modalOpen;

        modals.forEach((modal) => {
            if (modal.dataset.modal === data) {
                openModal(modal);
            }
        });
    });
});

modals.forEach((modal) => {
    modal.addEventListener("click", (evt) => closeModal(evt));
});

//------------------------------------добавление карточки-------------------------------------------------//

function addCard(imgValue, titleValue) {
    const cardTemplateElement = cardTemplate.cloneNode(true);

    cardTemplateElement.querySelector(".elements__photo").src = imgValue;
    cardTemplateElement.querySelector(".elements__title").textContent =
        titleValue;
    cardTemplateElement.querySelector(".elements__photo").alt = titleValue;

    cardTemplateElement
        .querySelector(".elements__like-btn")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("elements__like-btn_active");
        });

    cardTemplateElement
        .querySelector(".elements__delete-btn")
        .addEventListener("click", function (evt) {
            let deleteCardItem = evt.target.closest(".elements__item");
            deleteCardItem.remove();
        });

    cardTemplateElement
        .querySelector(".elements__photo")
        .addEventListener("click", function () {
            openModal(popupImageContainer);
            popupImage.src = imgValue;
            popupImageCaption.textContent = titleValue;
        });

    cardContainer.prepend(cardTemplateElement);
}

function handleFormPlace(evt) {
    evt.preventDefault();
    let imgValue = document.querySelector("._placeURL").value;
    let titleValue = document.querySelector("._placeName").value;
    addCard(imgValue, titleValue);
}

addPlacesBtn.addEventListener("click", handleFormPlace);

//------------------------------------6 исходных карточек-------------------------------------------------//

initialCards.forEach(function (element) {
    const initialCardsElement = cardTemplate.cloneNode(true);

    initialCardsElement.querySelector(".elements__photo").src = element.link;
    initialCardsElement.querySelector(".elements__title").textContent =
        element.name;
    initialCardsElement.querySelector(".elements__photo").alt = element.name;

    initialCardsElement
        .querySelector(".elements__like-btn")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("elements__like-btn_active");
        });

    initialCardsElement
        .querySelector(".elements__delete-btn")
        .addEventListener("click", function (evt) {
            let deleteCardItem = evt.target.closest(".elements__item");
            deleteCardItem.remove();
        });

    initialCardsElement
        .querySelector(".elements__photo")
        .addEventListener("click", function () {
            openModal(popupImageContainer);
            popupImage.src = element.link;
            popupImageCaption.textContent = element.name;
        });

    cardContainer.prepend(initialCardsElement);
});
