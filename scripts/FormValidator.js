class FormValidator {
  constructor(form, submitButton) {
    this._form = form;
    this._Button = submitButton;
  }
  //*validation form
  _validator(form, ButtonSubmit) {
    form.querySelectorAll(".form__input").forEach((item) => {
      item.addEventListener("input", (event) => {
        const message = form.querySelector(
          ".form__input-error_" + event.target.name
        );
        this._setValidationInputs(item, event.target.validity.valid);
        if (event.target.validity.valid) {
          this._setValidationMessage(
            message,
            event.target.validity.valid,
            "Is valid "
          );
        } else {
          this._setValidationMessage(
            message,
            event.target.validity.valid,
            event.target.validationMessage
          );
        }
        this._buttonToggle(form, ButtonSubmit);
      });
    });
    this._buttonToggle(form, ButtonSubmit);
  }

  //*checkout validation
  _isFormValid(formCheck) {
    const formInputs = Array.from(formCheck.querySelectorAll(".form__input"));
    return formInputs.every((item) => {
      return item.validity.valid;
    });
  }

  //*generate message valid/invalid
  _setValidationMessage(inputElement, isValid, validationMessage) {
    inputElement.textContent = validationMessage;
    inputElement.classList.add(
      isValid ? "form__input-error_valid" : "form__input-error_invalid"
    );
    inputElement.classList.remove(
      isValid ? "form__input-error_invalid" : "form__input-error_valid"
    );
  }

  //*generate color input valid/invalid
  _setValidationInputs(inputElement, isValid) {
    inputElement.classList.add(
      isValid ? "form__input_valid" : "form__input__invalid"
    );
    inputElement.classList.remove(
      isValid ? "form__input__invalid" : "form__input_valid"
    );
  }

  //*enable/disabled button form
  _buttonToggle(form, formSubmitButton) {
    if (!this._isFormValid(form)) {
      formSubmitButton.disabled = true;
      formSubmitButton.classList.add("form__button_disabled");
    } else {
      formSubmitButton.classList.remove("form__button_disabled");
      formSubmitButton.disabled = false;
    }
  }

  //*method over for forms
  enableValidation() {
    this._validator(this._form, this._Button);
  }
}

export function GenerateValidate(form, submitButton) {
  const newValidate = new FormValidator(form, submitButton);
  newValidate.enableValidation();
}
