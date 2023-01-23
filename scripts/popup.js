import {
  toggleForm,
  toggleFormCardReverse,
  elementDisabled,
  KeyHandle,
  delateClassInput,
} from "./Ultis.js";
import { GenerateValidate } from "./validate.js";

//popup
const popup = document.querySelector("#form__popup");
const popupOverlay = popup.querySelector("#form__overlay-popup");
//popup form
const popupContainer = document.forms.formEditProfile;
const popupButtonSubmit = popupContainer.querySelector("#form__button-popup");
const buttonClose = popup.querySelector("#form__close-icon-popup");
const buttonEdit = document.querySelector(".profile__edit-button");

buttonEdit.addEventListener("click", () => {
  toggleForm(popup, popupContainer);
  KeyHandle(popup, popupContainer, popupOverlay);
});
buttonClose.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  elementDisabled(popupButtonSubmit);
  delateClassInput(popup);
  popupContainer.reset();
});
popupOverlay.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
});
GenerateValidate(popupContainer, popupButtonSubmit);

function editProfile() {
  const inputName = popupContainer.querySelector("#form__name-popup");
  const inputJob = popupContainer.querySelector("#form__job-popup");

  const profileName = document.querySelector(".profile__name");
  const profileJob = document.querySelector(".profile__job");

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}
popupContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();
  delateClassInput(popup);
  elementDisabled(popupButtonSubmit);
   editProfile();
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  popupContainer.reset();
})

