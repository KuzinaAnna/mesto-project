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
      buttonSelectors,
      myId,
      placeNameInput,
      placeImgInput,
      buttonSubmitPlaces,
      cardSelectors,
} from "./utils.js";
import { openPopup, closePopup, disabledAddButton } from "./modal.js";
import { deleteCardApi, likeCard, likeCardRemove } from "./api.js";

export function checkLikeBtn(button) {
      return button.classList.contains("elements__like-btn_active");
}
//Проверка наличия моих лайков
export const checkLikesData = (likes) => {
      return likes.some((like) => {
            return like._id === myId;
      });
};

export function toggleLikeBtn(button) {
      button.classList.toggle("elements__like-btn_active");
}
//  Счетчик лайков
export function renderLikesCounter(cardElement, likes) {
      const likesCounter = cardElement.querySelector(
            ".elements__item__like-number"
      );
      likesCounter.textContent = likes.length;
}
//--------Добавление новой карточки в разметку страницы---------
export function addCard(cardElement) {
      cardContainer.prepend(cardElement);
}
//--------Функция добавления новой карточки--------------------
export function createCard(link, name, cardId, likes, ownerId) {
      const cardElement = cardTemplate
            .querySelector(cardSelectors.cardSelector)
            .cloneNode(true);
      const cardNameElement = cardElement.querySelector(
            cardSelectors.cardNameSelector
      );
      const cardImageElement = cardElement.querySelector(
            cardSelectors.cardImageSelector
      );
      const buttonLikeElement = cardElement.querySelector(
            buttonSelectors.buttonLikeSelector
      );
      const buttonDeleteElement = cardElement.querySelector(
            buttonSelectors.buttonDeleteSelector
      );

      cardImageElement.src = link;
      cardImageElement.alt = name;
      cardNameElement.textContent = name;

      cardElement.setAttribute("data-id", `${cardId}`); // получаем значение iD карточки
      if (checkLikesData(likes)) toggleLikeBtn(buttonLikeElement);
      if (ownerId !== myId) buttonDeleteElement.remove(); //убираем значок корзинки если эта карточка имеет не мой Id

      buttonLikeElement.addEventListener("click", handleLikeCard); //ставим/убираем лайк при клике

      // удаление карточки
      buttonDeleteElement.addEventListener("click", function (e) {
            const deleteCardItem = e.target.closest(".elements__item");
            deleteCardApi(cardId).then(() => {
                  deleteCardItem.remove();
            });
      });

      renderLikesCounter(cardElement, likes);

      // просмотр карточки
      cardImageElement.addEventListener("click", function () {
            openPopup(popupImageContainer);
            popupImage.src = link;
            popupImage.alt = name;
            popupImageCaption.textContent = name;
      });

      return cardElement;
}

function handleLikeCard(e) {
      const targetCard = e.target.closest(".elements__item");
      if (!checkLikeBtn(e.target)) {
            likeCard(targetCard.dataset.id)
                  .then((cardData) => {
                        toggleLikeBtn(e.target);
                        renderLikesCounter(targetCard, cardData.likes);
                  })
                  .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                  });
      } else {
            likeCardRemove(targetCard.dataset.id)
                  .then((cardData) => {
                        toggleLikeBtn(e.target);
                        renderLikesCounter(targetCard, cardData.likes);
                  })
                  .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                  });
      }
}
