const profileForm = document.querySelector("._userInfoForm");
const cardAddForm = document.querySelector("._newPlacesForm");
const avatarForm = document.querySelector("._newAvatar");

const popupEdit = document.querySelector(".popup_edit");
const popupPlace = document.querySelector(".popup_places");
const popupAvatar = document.querySelector(".popup_avatar");

const page = document.querySelector(".page");
//------
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonChangeAvatar = document.querySelector(".profile__avatar");

const popupUserName = document.querySelector("._userName");
const popupUserInfo = document.querySelector("._userInfo");
const profileName = document.querySelector(".profile__name");
const profileUserSubtitle = document.querySelector(".profile__info-subtitle");
const profileAvatar = document.querySelector(".profile__avatar");
const profileAvatarUrl = document.querySelector("._avatarURL");

const modals = document.querySelectorAll(".popup");
const closePopupBtns = document.querySelectorAll(".popup__close-button");
//------
const cardContainer = document.querySelector(".elements__list");
const addPlacesBtn = document.querySelector("._placesBtn");
const cardTemplate = document.querySelector("#card").content; //получаем содержимое шаблона
const imgUrl = document.querySelector("._placeURL");
const imgName = document.querySelector("._placeName");
//-------
const initialCards = [
    {
        name: "Port Waikato, Tuakau, Auckland, New Zealand",
        link: "https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        name: "Tsavo East National Park Kenya, Africa, Kenya",
        link: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
        name: "Kyoto, Japan",
        link: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        name: "Bali, Indonesia",
        link: "https://images.unsplash.com/photo-1588250728465-cc2f1c80df7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
    {
        name: "Rainbow Mountain, Cusco, Peru",
        link: "https://images.unsplash.com/photo-1631231248242-f82e0a0e2ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
        name: "Cabo San Lucas, Baja California Sur, Mexico",
        link: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    },
];

const cardItem = document.querySelector(".elements__item");
const popupImage = document.querySelector(".popup__img");
const popupImageCaption = document.querySelector(".popup__img-caption");
const popupImageContainer = document.querySelector(".popup_image");
//-------
