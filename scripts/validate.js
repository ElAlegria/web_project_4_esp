// const form = document.querySelector("#form-cards");
// const formButton = form.querySelector(".form__button");
export function validateForm(forms,buttonSubmite) {
  forms.querySelectorAll(".form__input").forEach((items) => {
    items.addEventListener("input", (event) => {
      if (event.target.validity.valid) {
        event.target.classList.add("form__input_valid");
        event.target.classList.remove("form__input__invalid");
        forms.querySelector(
          ".form__input-error_" + event.target.name
        ).textContent = "Esta correcto perro";
      } else {
        event.target.classList.remove("form__input_valid");
        event.target.classList.add("form__input__invalid");
        forms.querySelector(
          ".form__input-error_" + event.target.name
        ).textContent = event.target.validationMessage;
      }
      toggleButton(forms,buttonSubmite);
    });
  });
  toggleButton(forms,buttonSubmite);
}

function isFormValid(formcheck) {
  const formInputs = Array.from(formcheck.querySelectorAll(".form__input"));
  return formInputs.every((item) => {
    return item.validity.valid;
  });
}
function toggleButton(form, formsubmitebutton) {
  if (!isFormValid(form)) {
    formsubmitebutton.classList.add("form__button_disabled")
    formsubmitebutton.disabled = true;
  } else {
    formsubmitebutton.classList.remove("form__button_disabled")
    formsubmitebutton.disabled = false;
  }
}
