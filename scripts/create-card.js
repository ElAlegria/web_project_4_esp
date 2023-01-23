import {
  toggleForm,
  toggleFormCardReverse,
  animationJoinCard,
  openImageModal,
  closeImageModal,
  KeyHandle,
} from "./Ultis.js";
// import {cardGenerateForm}from "./index.js";

//Create de card
const userCards = document.querySelector(".cards");
const cardTemplate = document
  .querySelector(".cards-template")
  .content.querySelector(".cards__card");

//image modal
const image = document.querySelector(".image");
const imageBig = document.querySelector(".image__image-big");
const imageName = image.querySelector(".image__name");
const imageOverlay = image.querySelector(".image__overlay");
const imageButtonClose = image.querySelector(".image__close-button");

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


// syntax generate cards

class Card {
  constructor(cardSelector,data) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
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
    openImageModal(imageName, imageBig, this._image, this._title);
    KeyHandle(image, imageBig, imageOverlay);
  }
  _closeImageModal() {
    closeImageModal(imageButtonClose, imageName, imageBig);
    toggleFormCardReverse(image, imageBig, imageOverlay);
  }
  _setCardEventListeners() {
    //*remove card
    this._cardNode
      .querySelector(".cards__remove")
      .addEventListener("click", () => {
        this._removeCard();
      });
    //*click like
    this._cardNode
      .querySelector(".cards__heart")
      .addEventListener("click", (evt) => {
        this._clickLikeHeard(evt);
      });
    //*Open image modal
    this._cardNode
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._openImageModal();
      });
    //*close image modal
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



initialCards.map(function (Card) {
  cardGenerate(Card);
  
});

export function cardGenerate(data) {
  const newElement = new Card(cardTemplate, data);
  const cardGenerate = newElement.generateCard();
  // cardGenerateForm(cardGenerate);
  userCards.prepend(cardGenerate);
}
