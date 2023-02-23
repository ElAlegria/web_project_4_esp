import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit.bind(this);
    this._formElement = this._popupElement.querySelector(".popup__form");
  }

  open() {
    super.open();
  }
  close() {
    super.close();
  }
  reset() {
    this._formElement.reset();
  }
  setEventListeners() {
    this.open();
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  _getInputValues() {
    this._inputElements = this._popupElement.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputElements.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}
