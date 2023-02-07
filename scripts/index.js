import { GenerateValidate } from "./FormValidator.js";
import Section from "./Section.js";
import { Card } from "./Card.js";
import PopupWithImage from "./Popups/PopupWithImage.js";

import { elementDisabled, delateClassInput, generatePopup, modalPopup } from "./Utils.js";
//Form  Modified  cards
import {
  buttonAdd,
  card,
  cardContainer,
  formButtonSubmit,
  inputImageCard,
  InputNameCard,
  popup,
  popupContainer,
  popupButtonSubmit,
  buttonEdit,
  inputName,
  inputJob,
  profileName,
  profileJob,
  userCards,
  cardTemplate,
  initialCards,
  image,
} from "./const.js";

//var Dom
let CardData = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
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
        //!generate Card
        const cardGenerate = new Card(cardTemplate, data);
        const newElement = cardGenerate.generateCard();
        CardSection.addItem(newElement);
        //!generate Popup
       modalPopup(newElement,data,image)
      },
    },
    userCards
  );
  CardSection.renderer();
}


sectionCard(initialCards)
// sectionCard(initialCards);
// function modalPopup(renderer) {
//   const modalPopup = new Section({
//     items: renderer,
//     renderer: (data) => {
//       const generateModalPopup = new PopupWithImage(data, image);
//       generateModalPopup.setEventListeners();
//     },
//   });
//   modalPopup.renderer();
// }
// modalPopup(initialCards);

buttonAdd.addEventListener("click", () => {
  generatePopup(card);
});
//validate form
GenerateValidate(card, formButtonSubmit);
//save card
cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  elementDisabled(formButtonSubmit);
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
  GenerateValidate(popupContainer, popupButtonSubmit);
});

popupContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();
  delateClassInput(popup);
  elementDisabled(popupButtonSubmit);
  editProfile();
});
