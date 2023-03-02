import Api from "./Api";

// Variables

export const openFormProfile = document.querySelector(".profile__edit-button");

export const openCardButton = document.querySelector(".profile__add-button");

export const formEdit = document.querySelector(".popup__form_type_edit");

export const formImage = document.querySelector(".popup__form_type_add-image");

export const formProfileImage = document.querySelector(
  ".popup__form_type_profile-image"
);


export const profileTitle = document.querySelector(".profile__user");

export const profileProfession = document.querySelector(".profile__profession");

export const profileImage = document.querySelector(".profile__image");

export const deleteCardSubmitButton = document.querySelector(
  ".popup__button_type_delete"
);

export const editProfileSubmitButton = document.querySelector(
  ".popup__button_type_edit"
);

export const profileImageSubmitButton = document.querySelector(
  ".popup__button_type_profile-image"
);

export const profileImageOverlay = document.querySelector(
  ".profile__avatar-overlay"
);

export const addCardSubmitButton = document.querySelector(
  ".popup__create-card-button"
);

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//!Api rest
export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_04",
  headers: {
    authorization: "7b89216e-03f6-4244-8235-930eb464c231",
    "Content-Type": "application/json",
  },
});

//!handle from cards
export const handleLikAdd = (id, cardCLass) => {
  api
    .addLike(id)
    .then((res) => {
      cardCLass.updateLikes(res.likes);
      cardCLass.addHeart();
    })
    .catch((err) => console.log(err));
};
export const handleLikRemove = (id, cardCLass) => {
  api
    .removeLike(id)
    .then((res) => {
      cardCLass.updateLikes(res.likes);
      cardCLass.removeHeart();
    })
    .catch((err) => console.log(err));
};
export const handleDeleteClick = (id, cardClass, delateCardPopup) => {
  delateCardPopup.open();
  delateCardPopup.setSubmitAction(() => {
    api
      .removeCard(id)
      .then(() => {
        delateCardPopup.close();
        cardClass._deleteButton();
      })
      .catch((err) => console.log(err));
  });
};
