import { GenerateValidate } from "./FormValidator.js";
import Section from "./Section.js";

import {
  openElement,
  closeElement,
  elementDisabled,
  KeyHandle,
  delateClassInput,
  generatePopup,
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
let CardData = [
  {
    name: "",
    link: "",
  },
];

const cardValueForm = (name, image, data) => {
  data.map((item) => {
    item.name = name.value;
    item.link = image.value;
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
  generatePopup(card);
});
//validate form
GenerateValidate(card, formButtonSubmit);
//save card
cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  elementDisabled(formButtonSubmit);
  closeElement(card, cardContainer, cardOverlay);
  cardValueForm(InputNameCard, inputImageCard, CardData);
  sectionCard(CardData);
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
  generatePopup(popup);
  editPlaceHolder();
});

GenerateValidate(popupContainer, popupButtonSubmit);

popupContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();
  delateClassInput(popup);
  elementDisabled(popupButtonSubmit);
  editProfile();
  closeElement(popup, popupContainer, popupOverlay);
});
