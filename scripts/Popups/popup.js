import {
  openElement,
  closeElement,
  elementDisabled,
  delateClassInput,
} from "../Utils.js";
// import { GenerateValidate } from "./FormValidator.js";
export default class Popups {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  _const() {
    this._formContainer = document.querySelector(
      `#form__${this._popupSelector.id}`
    );
    this._buttonSubmit = this._popupSelector.querySelector(
      `#button__submit-${this._popupSelector.id}`
    );
    this._formOverlay = this._popupSelector.querySelector(
      `#overlay__${this._popupSelector.id}`
    );
  }
  open() {
    delateClassInput(this._popupSelector);
    elementDisabled(this._buttonSubmit);
    openElement(this._popupSelector, this._formContainer);
  }
  close() {
    closeElement(this._popupSelector,this._formContainer,this._formOverlay);
    elementDisabled(this._buttonSubmit);
  }
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._const();
    this.open();
    window.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
    this._popupSelector
      .querySelector(`#button__Close-${this._popupSelector.id}`)
      .addEventListener("click", () => {
        this.close();
      });
    this._formOverlay.addEventListener("click", () => {
      this.close();
    });
  }
}
