export const profileForm = document.querySelector("._userInfoForm");
export const cardAddForm = document.querySelector("._newPlacesForm");
export const avatarForm = document.querySelector("._newAvatar");

export const buttonAddCard = document.querySelector(".profile__add-button");
export const buttonChangeAvatar = document.querySelector(".profile__avatar");
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
// const page = document.querySelector(".page");
export const profileAvatar = document.querySelector(".profile__avatar");
export const profileAvatarUrl = document.querySelector("._avatarURL");
export const cardContainer = document.querySelector(".elements__list");
// const addPlacesBtn = document.querySelector("._placesBtn");
export const cardTemplate = document.querySelector("#card").content; //получаем содержимое шаблона
export const imgUrl = document.querySelector("._placeURL");
export const imgName = document.querySelector("._placeName");

export const popupImage = document.querySelector(".popup__img");
export const popupImageCaption = document.querySelector(".popup__img-caption");
export const popupImageContainer = document.querySelector(".popup_image");

export const formElement = document.querySelector(".popup__form");
// export const buttonElement = document.querySelector(".popup__button-submit");
export const buttonSubmitPlaces = ".popup__button-submit._placesBtn";
export const buttonSubmitAvatar =
    ".popup__button-submit._placesBtn._submitAvatar";
//-------

const newZealand = new URL(
    "https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    import.meta.url
);
const kenya = new URL(
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    import.meta.url
);
const kyoto = new URL(
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    import.meta.url
);
const bali = new URL(
    "https://images.unsplash.com/photo-1588250728465-cc2f1c80df7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    import.meta.url
);
const peru = new URL(
    "https://images.unsplash.com/photo-1631231248242-f82e0a0e2ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    import.meta.url
);
const mexico = new URL(
    "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    import.meta.url
);

export const initialCards = [
    { name: "Port Waikato, Tuakau, Auckland, New Zealand", link: newZealand },
    { name: "Tsavo East National Park Kenya, Africa, Kenya", link: kenya },
    { name: "Kyoto, Japan", link: kyoto },
    { name: "Bali, Indonesia", link: bali },
    { name: "Rainbow Mountain, Cusco, Peru", link: peru },
    { name: "Cabo San Lucas, Baja California Sur, Mexico", link: mexico },
];
