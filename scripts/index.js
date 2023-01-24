import {
  toggleForm,
  toggleFormCardReverse,
  elementDisabled,
  KeyHandle,
  delateClassInput,
} from "./Utils.js";
import { GenerateValidate } from "./FormValidator.js";
import { cardGenerate } from "./Card.js";
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
  profileName,
  profileJob,
} from "./const.js";
//var Dom
let storeInputs = {
  name: "",
  link: "",
};
const cardValueForm = (data) => {
  data.name = InputNameCard.value;
  data.link = inputImageCard.value;
  setTimeout(() => {
    data.name = "";
    data.link = "";
  }, 1000);
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
const editProfile = () => {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
};

const editPlaceHolder = () => {

  inputName.value = profileName.textContent;
  inputJob.value= profileJob.textContent;
};
const resetInputContent = () =>{
  setTimeout(() => {
    popupContainer.reset();
  }, 1000);
}
buttonEdit.addEventListener("click", () => {
  toggleForm(popup, popupContainer);
  KeyHandle(popup, popupContainer, popupOverlay);
  editPlaceHolder();
});

buttonClose.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  elementDisabled(popupButtonSubmit);
  delateClassInput(popup);
  // resetInputContent();
});
popupOverlay.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
});
GenerateValidate(popupContainer, popupButtonSubmit);

popupContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();
  delateClassInput(popup);
  elementDisabled(popupButtonSubmit);
  editProfile();
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
// resetInputContent();
});
