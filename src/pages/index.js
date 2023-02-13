import './index.css';
// una disculpa mande el archivo equivocado, sorri!
import {
  initialCards,
  selectors,
  formsElements,
  updateUserInfo,
  handleAddCardSubmit,
} from '../Components/utils.js';
import Card from '../Components/Card.js';
import PopupWithForm from '../Components/PopupWithForm.js';
import FormValidator from '../Components/FormValidator.js';
import previewPopup from '../Components/PopupWithImage.js';
import Section from '../Components/Section.js';
import UserInfo from '../Components/UserInfo.js';

export const addCardPopup = new PopupWithForm('.popup_add_card', handleAddCardSubmit);

export const editPopup = new PopupWithForm('.popup_edit_profile', updateUserInfo);

// renderiza las 6 tarjetas iniciales aparescan, tiene habilitado el boton like y eliminar card
export const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const newCard = new Card(
        {
          data,
          handleCardClick: ({title, image}) => {
            previewPopup.open({title, image});
          },
        },
        '.card-template'
      );
      const cardElement = newCard.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  '.cards__container'
);

cardSection.renderer();

// instancia para la clase UserInfo
const profileUser = new UserInfo({
  userName: '.profile__user',
  userOcupation: '.profile__profession',
});

profileUser.getUserInfo();

// instancia para la clase FormValidator
formsElements.forEach((form) => {
  const formValidator = new FormValidator(form, selectors);
  formValidator.enableValidation();
});

// abrir formulario agregar tarjeta
const addCardButton = document.querySelector('.profile__add-button');
addCardButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addCardPopup.open();
});

// abrir formulario editar perfil
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  editPopup.open();
});

// variables para agarrar los backgrounds de cada popup
const previewBackground = document.querySelector('#popup__background-preview');
const editBackground = document.querySelector('#popup__background-edit');
const addBackground = document.querySelector('#popup__background-add');

// agregar evento de popup para que se cierre formulario si haces click fuera de el
previewBackground.addEventListener('click', () => previewPopup.close());
editBackground.addEventListener('click', () => editPopup.close());
addBackground.addEventListener('click', () => addCardPopup.close());

// llamas a los eventos para que cierren los popups si haces click fuera de el
addCardPopup.setEventListeners();
editPopup.setEventListeners();
previewPopup.setEventListeners();