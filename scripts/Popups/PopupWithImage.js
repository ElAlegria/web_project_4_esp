import {
  closeElement,
  closeImageModal,
  openElement,
  openImageModal,
} from "../Utils.js";
import Popups from "./popup.js";

export default class PopupWithImage extends Popups {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._title = data.name;
    this._image = data.link;
  }

  _const() {
    this._modalImageBig =
      this._popupSelector.querySelector(".image__image-big");
    this._modalName = this._popupSelector.querySelector(".image__name");
    this._modalOverlay = this._popupSelector.querySelector(".image__overlay");
    this._modalCloseButton = this._popupSelector.querySelector(
      ".image__close-button"
    );
  }
  open() {
    // super.open()
    this._modalImageBig.src = this._image;
    this._modalName.textContent = this._title;
    this._modalImageBig.alt = this._title;
    openElement(this._popupSelector, this._modalImageBig);
    openImageModal(this._modalName);
  }

  close() {
    this._modalImageBig.alt = "";
    closeElement(this._popupSelector, this._modalImageBig, this._modalOverlay);
    closeImageModal(this._modalCloseButton, this._modalName);
    setTimeout(() => {
      this._modalImageBig.src = "";
      this._modalName.textContent = "";
    }, 1100);
  }
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
  setEventListeners(objectTarget) {
    this._const();
    
    objectTarget.addEventListener("click",()=>{
      this.open();
    })
    window.addEventListener("keydown", (e) => {
      this._handleEscClose(e);

    });

    this._modalCloseButton.addEventListener("click", () => {
      this.close();
    });
    this._modalOverlay.addEventListener("click", () => {
      this.close();
    });
  }
}
