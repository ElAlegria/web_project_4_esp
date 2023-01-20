export function validateForm(forms, ButtonSubmit) {
  forms.querySelectorAll(".form__input").forEach((items) => {
    items.addEventListener("input", (event) => {
      const message = forms.querySelector(
        ".form__input-error_" + event.target.name
      );
      setValidationInputs(items, event.target.validity.valid);
      if (event.target.validity.valid) {
        setValidationMessage(
          message,
          event.target.validity.valid,
          "Is valid "
        );
      } else {
        setValidationMessage(
          message,
          event.target.validity.valid,
          event.target.validationMessage
        );
      }
      toggleButton(forms, ButtonSubmit);
    });
  });
  toggleButton(forms, ButtonSubmit);
}
export function delateClassInput(forms) {
  forms.querySelectorAll(".form__input").forEach((event) => {
    const messageError = forms.querySelector(
      ".form__input-error_" + event.name
    );
    event.classList.remove("form__input_valid","form__input__invalid")
    messageError.classList.remove("form__input-error_valid","form__input-error_invalid");
  });
}

function isFormValid(formCheck) {
  const formInputs = Array.from(formCheck.querySelectorAll(".form__input"));
  return formInputs.every((item) => {
    return item.validity.valid;
  });
}
function toggleButton(form, formSubmitButton) {
  if (!isFormValid(form)) {
    formSubmitButton.disabled = true;
    formSubmitButton.classList.add("form__button_disabled");
  } else {
    formSubmitButton.classList.remove("form__button_disabled");
    formSubmitButton.disabled = false;
  }
}
function setValidationMessage(inputElement, isValid, validationMessage) {
  inputElement.textContent = validationMessage;
  inputElement.classList.add(
    isValid ? "form__input-error_valid" : "form__input-error_invalid"
  );
  inputElement.classList.remove(
    isValid ? "form__input-error_invalid" : "form__input-error_valid"
  );
}
function setValidationInputs(inputElement, isValid) {
  inputElement.classList.add(
    isValid ? "form__input_valid" : "form__input__invalid"
  );
  inputElement.classList.remove(
    isValid ? "form__input__invalid" : "form__input_valid"
  );
}
