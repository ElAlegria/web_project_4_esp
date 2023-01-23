import {
    toggleForm,
    toggleFormCardReverse,
    elementDisabled,
    KeyHandle,
    delateClassInput,
  } from "./Ultis.js";
  import { GenerateValidate } from "./validate.js";
  import { cardGenerate } from "./create-card.js";
  import * as formPopup from "./popup.js"
  //Form  Modified  cards
  const buttonAdd = document.querySelector(".profile__add-button");
  const card = document.querySelector("#form-cards");
  const cardOverlay = card.querySelector("#form__overlay-cards");
  const cardContainer = document.forms.formCards;
  const formButtonSubmit = cardContainer.querySelector(".form__button");
  const buttonCloseCard = card.querySelector("#form__close-icon-cards");
  
  const inputImageCard = cardContainer.querySelector("#form__image");
  const InputNameCard = cardContainer.querySelector("#form__title");
  //
  let storeInputs = {
    name: "",
    link: "",
  };
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
   const cardValueForm = (data) => {
    data.name = InputNameCard.value;
    data.link = inputImageCard.value;
    setTimeout(() => {
      data.name = "";
      data.link = "";
    }, 1000);
  };
  //validate form
  GenerateValidate(card, formButtonSubmit);
  //save card
  cardContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    elementDisabled(formButtonSubmit);
    toggleFormCardReverse(card, cardContainer, cardOverlay);
    cardValueForm(storeInputs);
    cardGenerate(storeInputs)
    delateClassInput(card);
    cardContainer.reset();
  });
  