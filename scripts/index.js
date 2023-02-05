import { GenerateValidate } from "./FormValidator.js";
import Section from "./Section.js";

import {
  toggleForm,
  toggleFormCardReverse,
  elementDisabled,
  KeyHandle,
  delateClassInput,
} from "./Utils.js";
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
  userCards,
  cardTemplate,
  initialCards,
} from "./const.js";
import { Card } from "./Card.js";

//var Dom
let storeInputs = [
  {
    name: "",
    link: "",
  },
];

const cardValueForm = (data) => {
  data.map(item => {
    item.name = InputNameCard.value;
    item.link = inputImageCard.value;
  });  

};

function sectionCard(renderer) {
  const CardSection = new Section(
    {
      items: renderer,
      renderer: (data) => {
        const cardGenerate = new Card(cardTemplate, data);
        const newElement = cardGenerate.generateCard();
        CardSection.addItem(newElement);
      },
    },
    userCards
  );
  CardSection.renderer();
}

sectionCard(initialCards);

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
  sectionCard(storeInputs);
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
  inputJob.value = profileJob.textContent;
};

buttonEdit.addEventListener("click", () => {
  toggleForm(popup, popupContainer);
  KeyHandle(popup, popupContainer, popupOverlay);
  editPlaceHolder();
});

buttonClose.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  elementDisabled(popupButtonSubmit);
  delateClassInput(popup);
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
});
