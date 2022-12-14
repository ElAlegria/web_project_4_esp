import {
  toggleForm,
  toggleFormCardReverse,
  animationJoinCard,
  openImageModal,
  closeImageModal,
  elementDisabled,
  KeyHandle
} from "./Ultis.js";
import { validateForm,delateClassInput} from "./validate.js";

//formulario para modificar las cards
const card = document.querySelector("#form-cards");
const cardOverlay = card.querySelector("#form__overlay-cards");
export const cardContainer = document.forms.formcards;
const formButtonSumite = cardContainer.querySelector(".form__button");
const messageError = cardContainer.querySelector(".form__input-error");
const buttonCloseCard = card.querySelector("#form__close-icon-cards");
const buttonAdd = document.querySelector(".profile__add-button");
const inputImageCard = cardContainer.querySelector("#form__image");
const InputNameCard = cardContainer.querySelector("#form__title");
//creador de cartas
const usuarioCards = document.querySelector(".cards");
const cardTemplate = document
  .querySelector(".cards-template")
  .content.querySelector(".cards__card");

//image modal
const image = document.querySelector(".image");
const imageBig = document.querySelector(".image__imagen-big");
const imageName = image.querySelector(".image__name");
const imageOverlay = image.querySelector(".image__overlay");
const imageButtonClose = image.querySelector(".image__close-button");

//estructura de array para almacenar las info de las cards

const initialCards = [
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

//sintaxis generate cards
const CardsSave = [];

initialCards.map(function (cardsinicio) {
  CreateCards(cardsinicio.name, cardsinicio.link);
});

export function CreateCards(titleValue, linkValue) {
  const node = cardTemplate.cloneNode(true);
  const cardsImage = node.querySelector(".cards__image");
  const cardsContent = node.querySelector(".cards__content");
  const cardsRemoveButton = node.querySelector(".cards__remove");
  const cardstitle = node.querySelector(".cards__title");
  const cardslike = node.querySelector(".cards__heart");

  cardstitle.textContent = titleValue;
  cardsImage.src = linkValue;

  usuarioCards.prepend(node);
  animationJoinCard(cardsImage, cardsRemoveButton, cardsContent);

  CardsSave.push(node);

  //click link animation
  cardslike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("cards__heart_active");
  });

  cardsRemoveButton.addEventListener("click", function (evt) {
    node.classList.add("animation__position-right");
    setTimeout(() => {
      node.classList.remove("animation__position-right");
      node.remove();
    }, 1200);
  });

  cardsImage.addEventListener("click", () => {
    toggleForm(image, imageBig);
    openImageModal(imageName, imageBig, linkValue, titleValue);
    KeyHandle(image, imageBig, imageOverlay)
  });
  imageButtonClose.addEventListener("click", () => {
    closeImageModal(imageButtonClose, imageName);
    toggleFormCardReverse(image, imageBig, imageOverlay);
  });

  return node;
}

buttonAdd.addEventListener("click", () => {
  toggleForm(card, cardContainer);
  KeyHandle(card, cardContainer, cardOverlay)
});
buttonCloseCard.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);

  elementDisabled(formButtonSumite);
  delateClassInput(card)
  cardContainer.reset();
});




cardOverlay.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  // cardContainer.reset();
});

//validate form
validateForm(card, formButtonSumite);
//save card
cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  elementDisabled(formButtonSumite);
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  CreateCards(InputNameCard.value, inputImageCard.value);
  cardContainer.reset();
  delateClassInput(card)
});
