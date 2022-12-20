// const form = document.querySelector("#form-cards");
// const formButton = form.querySelector(".form__button");
export function validateForm(forms, buttonSubmite) {
  forms.querySelectorAll(".form__input").forEach((items) => {
    items.addEventListener("input", (event) => {
      const message = forms.querySelector(
        ".form__input-error_" + event.target.name
      );
      if (event.target.validity.valid) {
        setValidationInputs(items, event.target.validity.valid);
        setValidationMessage(
          message,
          event.target.validity.valid,
          "Soy valido perro prosigue"
        );
      } else {
        setValidationInputs(items, event.target.validity.valid);
        setValidationMessage(
          message,
          event.target.validity.valid,
          event.target.validationMessage
        );
      }
      toggleButton(forms, buttonSubmite);
    });
  });
  toggleButton(forms, buttonSubmite);
}

function isFormValid(formcheck) {
  const formInputs = Array.from(formcheck.querySelectorAll(".form__input"));
  return formInputs.every((item) => {
    return item.validity.valid;
  });
}
function toggleButton(form, formsubmitebutton) {
  if (!isFormValid(form)) {
    formsubmitebutton.classList.add("form__button_disabled");
    formsubmitebutton.disabled = true;
  } else {
    formsubmitebutton.classList.remove("form__button_disabled");
    formsubmitebutton.disabled = false;
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
