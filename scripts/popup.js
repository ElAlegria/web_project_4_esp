import { toggleForm, toggleFormCardReverse } from "./Ultis.js";
//popup
const popup = document.querySelector("#form__popup");
const popupOverlay = popup.querySelector("#form__overlay-popup");
//popup form
const popupContainer = document.forms.formEditProfie;
const buttonClose = popup.querySelector("#form__close-icon-popup");
const buttonEdit = document.querySelector(".profile__edit-button");

buttonEdit.addEventListener("click", () => {
  toggleForm(popup, popupContainer);
});
buttonClose.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  popupContainer.reset();
});

const inputName = popupContainer.querySelector("#form__name-popup");
const inputJob = popupContainer.querySelector("#form__job-popup");

const profileName = document.querySelector(".profile__name");
const profielJob = document.querySelector(".profile__job");

popupContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profielJob.textContent = inputJob.value;

  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  popupContainer.reset();
});
