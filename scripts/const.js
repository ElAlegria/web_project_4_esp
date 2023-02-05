//const Form cards
export const buttonAdd = document.querySelector(".profile__add-button");
export const card = document.querySelector("#form-cards");
export const cardOverlay = card.querySelector("#form__overlay-cards");
export const cardContainer = document.forms.formCards;
export const formButtonSubmit = cardContainer.querySelector(".form__button");
export const buttonCloseCard = card.querySelector("#form__close-icon-cards");
export const inputImageCard = cardContainer.querySelector("#form__image");
export const InputNameCard = cardContainer.querySelector("#form__title");
//
//const form modified popup
export const popup = document.querySelector("#form__popup");
export const popupOverlay = popup.querySelector("#form__overlay-popup");
//popup form
export const popupContainer = document.forms.formEditProfile;
export const popupButtonSubmit = popupContainer.querySelector(
  "#form__button-popup"
);
export const buttonClose = popup.querySelector("#form__close-icon-popup");
export const buttonEdit = document.querySelector(".profile__edit-button");
export const inputName = popupContainer.querySelector("#form__name-popup");
export const inputJob = popupContainer.querySelector("#form__job-popup");
export const profileJob = document.querySelector(".profile__job");
export const profileName = document.querySelector(".profile__name");

// const create card//Create de card
export const userCards = document.querySelector(".cards");

export const cardTemplate = document
  .querySelector(".cards-template")
  .content.querySelector(".cards__card");

//image modal
export const image = document.querySelector(".image");
export const imageBig = document.querySelector(".image__image-big");
export const imageName = image.querySelector(".image__name");
export const imageOverlay = image.querySelector(".image__overlay");
export const imageButtonClose = image.querySelector(".image__close-button");

//  array cards
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
