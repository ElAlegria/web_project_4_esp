import { animationJoin } from "./Utils.js";

// import {cardGenerateForm}from "./index.js";

// syntax generate cards

export class Card {
  constructor(cardSelector, data) {
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
    animationJoin(cardsImage, cardsRemoveButton, cardsContent);
  }
  //  _openImageModal() {
  //    openElement(image, imageBig);
  //    KeyHandle(image, imageBig, imageOverlay);
  //  }
  //  _closeImageModal() {
  //  closeImageModal(imageButtonClose, imageName, imageBig);
  //    closeElement(image, imageBig, imageOverlay);
  //  }
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
    // //*Open image modal
    // this._cardNode
    //   .querySelector(".cards__image")
    //   .addEventListener("click", () => {
    //     this._openImageModal();
    //   });
    // //*close image modal
    // this._imageButtonClose.addEventListener("click", () => {
    //   this._closeImageModal();
    // });
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
