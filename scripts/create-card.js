import {
  toggleForm,
  toggleFormCardReverse,
  animationJoinCard,
  openImageModal,
  closeImageModal,
  elementDisabled,
  KeyHandle,
} from "./Ultis.js";
import { validateForm, delateClassInput } from "./validate.js";

//Form  Modified  cards
const card = document.querySelector("#form-cards");
const cardOverlay = card.querySelector("#form__overlay-cards");
const cardContainer = document.forms.formcards;
const formButtonSubmit = cardContainer.querySelector(".form__button");
const buttonCloseCard = card.querySelector("#form__close-icon-cards");
const buttonAdd = document.querySelector(".profile__add-button");
const inputImageCard = cardContainer.querySelector("#form__image");
const InputNameCard = cardContainer.querySelector("#form__title");
//Create de card
const userCards = document.querySelector(".cards");
const cardTemplate = document
  .querySelector(".cards-template")
  .content.querySelector(".cards__card");

//image modal
const image = document.querySelector(".image");
const imageBig = document.querySelector(".image__imagen-big");
const imageName = image.querySelector(".image__name");
const imageOverlay = image.querySelector(".image__overlay");
const imageButtonClose = image.querySelector(".image__close-button");

//  array cards

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

class Card {
  constructor(cardSelector, title, image) {
    this._cardSelector = cardSelector;
    this._title = title;
    this._image = image;
  }

  _getTemplate() {
    const node = this._cardSelector.cloneNode(true);
    return node;
  }

  _removeCard() {
    this._cardNode.classList.add("animation__position-right");
    setTimeout(() => {
      this._cardNode.classList.remove("animation__position-right");
      this._cardNode.remove();
    }, 1200);
  }

  _clickLikeHeard(evt) {
    evt.target.classList.toggle("cards__heart_active");
  }

  _animationJoinCard() {
    const cardsImage = this._cardNode.querySelector(".cards__image");
    const cardsContent = this._cardNode.querySelector(".cards__content");
    const cardsRemoveButton = this._cardNode.querySelector(".cards__remove");
    animationJoinCard(cardsImage, cardsRemoveButton, cardsContent);
  }
  _openImageModal() {
    toggleForm(image, imageBig);
    openImageModal(imageName, imageBig, this._image, this._image);
    KeyHandle(image, imageBig, imageOverlay);
  }
  _closeImageModal() {
    closeImageModal(imageButtonClose, imageName);
    toggleFormCardReverse(image, imageBig, imageOverlay);
  }
  _setCardEventListeners() {
    this._cardNode
      .querySelector(".cards__remove")
      .addEventListener("click", () => {
        this._removeCard();
      });

    this._cardNode
      .querySelector(".cards__heart")
      .addEventListener("click", function (evt) {
        this._clickLikeHeard();
      });
    this._cardNode
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._openImageModal();
      });
    imageButtonClose.addEventListener("click", () => {
      this._closeImageModal();
    });
  }

  generateCard() {
    this._cardNode = this._getTemplate();
    this._cardNode.querySelector(".cards__title").textContent = this._title;
    this._cardNode.querySelector(".cards__image").src = this._image;
    this._setCardEventListeners();
    this._animationJoinCard();
    return this._cardNode;
  }
}

function cardGenerate(titleValue, linkValue) {
  const newElement = new Card(cardTemplate, titleValue, linkValue);
  const cardGenerate = newElement.generateCard();
  userCards.prepend(cardGenerate);
}

initialCards.map(function (Card) {
  cardGenerate(Card.name, Card.link);
});

buttonAdd.addEventListener("click", () => {
  toggleForm(card, cardContainer);
  KeyHandle(card, cardContainer, cardOverlay);
});
buttonCloseCard.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);

  elementDisabled(formButtonSumite);
  delateClassInput(card);
  cardContainer.reset();
});

cardOverlay.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  // cardContainer.reset();
});

//validate form
validateForm(card, formButtonSubmit);

//save card
cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  elementDisabled(formButtonSubmit);
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  cardGenerate(InputNameCard.value, inputImageCard.value);
  delateClassInput(card);
  cardContainer.reset();
});
