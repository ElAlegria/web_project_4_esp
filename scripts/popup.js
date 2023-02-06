import {
  openElement,
  closeElement,
  elementDisabled,
  // delateClassInput,
} from "./Utils.js";
import { GenerateValidate } from "./FormValidator.js";
export default class Form {
  constructor(form) {
    this._formSelector = form;
  }
  _open() {
    this._formContainer = document.querySelector(
      `#form__${this._formSelector.id}`
    );
    this._buttonSubmit = this._formSelector.querySelector(
      `#button__submit-${this._formSelector.id}`
    );
    elementDisabled(this._buttonSubmit);
    openElement(this._formSelector, this._formContainer);
  }
  _close() {
    this._formOverlay = this._formSelector.querySelector(
      `#overlay__${this._formSelector.id}`
    );
    closeElement(this._formSelector, this._formContainer, this._formOverlay);
    elementDisabled(this._buttonSubmit);
  }
  _handleEscClose() {
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeElement(
          this._formSelector,
          this._formContainer,
          this._formOverlay
        );
      }
    });
  }

  setEventListeners() {
    this._open();
    this._formSelector
      .querySelector(`#button__Close-${this._formSelector.id}`)
      .addEventListener("click", () => {
        this._close();
      });
    // this._formOverlay.addEventListener("click", () => {
    //   this._close();
    // });
  }
}
