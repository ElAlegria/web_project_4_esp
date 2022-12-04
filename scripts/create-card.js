//formulario para modificar las cards
const card = document.querySelector(".create-card");
const cardContainer = card.querySelector(".create-card__container");
const buttonCloseCard = card.querySelector(".create-card__close-icon");
const buttonAdd = document.querySelector(".profile__add-button");
const inputImageCard = cardContainer.querySelector(".create-card__image");
const InputNameCard = cardContainer.querySelector(".create-card__name");
const cardTemplate = document
  .querySelector(".cards-template")
  .content.querySelector(".cards__card");
const usuarioCards = document.querySelector(".cards");

//funciones para añadir tarjetas
// const data = {title:'card Title'};

//estructura de array para almacenar las info de las cards

const initialCards = [
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

function CreateCards() {
  const cardName = document.querySelector(".cards__title");
  const cardImage = document.querySelector(".cards__image");
  const node = cardTemplate.cloneNode(true);

  //  cardImage.textContent = initialCards.name;

  cardsalmacen.push(node);
  usuarioCards.append(node);
}

// abrir,cerrar y guardar formulario de cards
buttonAdd.addEventListener("click", () => {
  card.classList.add("animation__show");
  cardContainer.classList.add("animation__scale");
});

buttonCloseCard.addEventListener("click", () => {
  card.classList.remove("animation__show");
  card.classList.remove("animation__show-");
});

function toggleFormCardReverse() {
  card.classList.remove("animation__show");
  cardContainer.classList.remove("animation__scale");
}

function handleCreateCardFormSubmitCard(event) {
  event.preventDefault();

  toggleFormCardReverse();
  CreateCards();
  initialCards.push({ name: InputNameCard.value, link: inputImageCard.value });
  inputImageCard.value = "";
  InputNameCard.value = "";
}

cardContainer.addEventListener("submit", handleCreateCardFormSubmitCard);
