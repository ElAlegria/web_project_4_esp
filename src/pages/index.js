import "./index.css";
// const serverApi = new Api()
import {
  initialCards,
  selectors,
  formsElements,
  updateUserInfo,
  handleAddCardSubmit,
  handleEditSubmit,
  handleEditImage,
} from "../Components/utils.js";
import Card from "../Components/Card.js";
import PopupWithForm from "../Components/PopupWithForm.js";
import FormValidator from "../Components/FormValidator.js";
import previewPopup from "../Components/PopupWithImage.js";
import Section from "../Components/Section.js";
import UserInfo from "../Components/UserInfo.js";
import Popup from "../Components/Popup";

export const addCardPopup = new PopupWithForm(
  ".popup_add_card",
  handleAddCardSubmit
);

export const editPopup = new PopupWithForm(
  ".popup_edit_profile",
  handleEditSubmit
);

export const delatePopup = new Popup(".popup_delate_card", updateUserInfo);
delatePopup.setEventListeners();

export const editImagePopup = new PopupWithForm(
  "#edit-image-profile",
  handleEditImage
);

// renderiza las 6 tarjetas iniciales aparescan, tiene habilitado el boton like y eliminar card
export const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const newCard = new Card(
        {
          data,
          handleCardClick: ({ title, image }) => {
            previewPopup.setEventListeners({ title, image });
          },
        },
        ".card-template"
      );
      const cardElement = newCard.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".cards__container"
);

cardSection.renderer();

// instancia para la clase UserInfo
const profileUser = new UserInfo({
  userName: ".profile__user",
  userOcupation: ".profile__profession",
  userImage: ".profile__image",
});

profileUser.getUserInfo();

// instancia para la clase FormValidator
formsElements.forEach((form) => {
  const formValidator = new FormValidator(form, selectors);
  formValidator.enableValidation();
});

// abrir formulario agregar tarjeta
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  addCardPopup.setEventListeners();
  addCardPopup.reset()
});

// abrir formulario editar perfil
const editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  editPopup.setEventListeners();
});

const editImageProfile = document.querySelector(".profile__edit");
editImageProfile.addEventListener("click", () => {
  editImagePopup.setEventListeners();
  editImagePopup.reset()
});
