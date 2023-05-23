export const myId = "22c540bd64ebce1ba647be86";
export const profileForm = document.querySelector("._userInfoForm");
export const cardAddForm = document.querySelector("._newPlacesForm");
export const avatarForm = document.querySelector("._newAvatar");

export const buttonAddCard = document.querySelector(".profile__add-button");
export const buttonProfileEdit = document.querySelector(
      ".profile__edit-button"
);
export const popupUserName = document.querySelector("._userName");
export const popupUserInfo = document.querySelector("._userInfo");
export const profileName = document.querySelector(".profile__name");
export const profileUserSubtitle = document.querySelector(
      ".profile__info-subtitle"
);
export const popupEdit = document.querySelector(".popup_edit");
export const popupPlace = document.querySelector(".popup_places");
export const popupAvatar = document.querySelector(".popup_avatar");

export const profileAvatar = document.querySelector(".profile__avatar");
export const profileAvatarUrl = document.querySelector("._avatarURL");
export const cardContainer = document.querySelector(".elements__list");
export const cardTemplate = document.querySelector("#card").content; //получаем содержимое шаблона
export const cardSelectors = {
      cardSelector: ".elements__item",
      cardImageSelector: ".elements__photo",
      cardNameSelector: ".elements__title",
};
export const buttonSelectors = {
      buttonLikeSelector: ".elements__like-btn",
      buttonDeleteSelector: ".elements__delete-btn",
};
export const placeNameInput = document.querySelector("#placeName");
export const placeImgInput = document.querySelector("#placeURL");
export const formSelectors = {
      formSelector: ".form",
      inputSelector: ".form__input",
      submitButtonSelector: ".button-save",
};

export const imgUrl = document.querySelector("._placeURL");
export const imgName = document.querySelector("._placeName");

export const popupImage = document.querySelector(".popup__img");
export const popupImageCaption = document.querySelector(".popup__img-caption");
export const popupImageContainer = document.querySelector(".popup_image");

export const formElement = document.querySelector(".popup__form");
export const buttonSubmitPlaces = ".popup__button-submit._placesBtn";
export const btnUpdateCard = document.querySelector(buttonSubmitPlaces);
export const buttonSubmitAvatar =
      ".popup__button-submit._placesBtn._submitAvatar";
export const buttonSubmitInfo = ".popup__button-submit._infoBtn";
