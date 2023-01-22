import {
  toggleForm,
  toggleFormCardReverse,
  elementDisabled,
  KeyHandle,
  delateClassInput
} from "./Ultis.js";
// import { validateForm } from "./validate.js";
import {cardGenerate } from "./create-card.js";
//Form  Modified  cards
const buttonAdd = document.querySelector(".profile__add-button");
const card = document.querySelector("#form-cards");
const cardOverlay = card.querySelector("#form__overlay-cards");
const cardContainer = document.forms.formcards;
const formButtonSubmit = cardContainer.querySelector(".form__button");
const buttonCloseCard = card.querySelector("#form__close-icon-cards");
const inputImageCard = cardContainer.querySelector("#form__image");
const InputNameCard = cardContainer.querySelector("#form__title");

buttonAdd.addEventListener("click", () => {
  toggleForm(card, cardContainer);
  KeyHandle(card, cardContainer, cardOverlay);
});
buttonCloseCard.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);

  elementDisabled(formButtonSubmit);
  delateClassInput(card);
  cardContainer.reset();
});

cardOverlay.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  // cardContainer.reset();
});

//validate form
// validateForm(card, formButtonSubmit);
//save card
cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  elementDisabled(formButtonSubmit);
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  cardGenerate(InputNameCard.value, inputImageCard.value);
  delateClassInput(card);
  cardContainer.reset();
  console.log("sadada")
});
