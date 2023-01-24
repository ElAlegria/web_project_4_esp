import {
  toggleForm,
  toggleFormCardReverse,
  elementDisabled,
  KeyHandle,
  delateClassInput,
} from "./Ultis.js";
import { GenerateValidate } from "./validate.js";
import { cardGenerate } from "./create-card.js";
//Form  Modified  cards
import {
  buttonAdd,
  card,
  cardOverlay,
  cardContainer,
  formButtonSubmit,
  buttonCloseCard,
  inputImageCard,
  InputNameCard,
  popup,
  popupContainer,
  popupButtonSubmit,
  popupOverlay,
  buttonClose,
  buttonEdit,
  inputName,
  inputJob,
  profileJob,
} from "./const.js";
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
  cardGenerate(storeInputs);
  delateClassInput(card);
  cardContainer.reset();
});

//popup form

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
});
