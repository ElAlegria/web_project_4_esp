//formulario para modificar las cards
const card = document.querySelector(".create-card");
const cardContainer = card.querySelector(".create-card__container");
const buttonCloseCard = card.querySelector(".create-card__close-icon");
const buttonAdd = document.querySelector(".profile__add-button");
const inputImageCard = cardContainer.querySelector(".create-card__image");
const InputNameCard = cardContainer.querySelector(".create-card__name");
const usuarioCards = document.querySelector(".cards");

//funciones para añadir tarjetas
// const data = {title:'card Title'};

//estructura de array para almacenar las info de las cards

const initialCards = [];

function CreateCards(titleValue, linkValue) {
  const cardTemplate = document
    .querySelector(".cards-template")
    .content.querySelector(".cards__card");

  const node = cardTemplate.cloneNode(true);

  node.querySelector(".cards__title").textContent = titleValue;
  node.querySelector(".cards__image").src = linkValue;
  usuarioCards.append(node);
  initialCards.push(node);

  node.querySelector(".cards__heart").addEventListener("click", function (evt) {
    evt.target.classList.toggle("cards__heart_active");
  });

  const removebutton = node
    .querySelector(".cards__remove")
    .addEventListener("click", function (evt) {
      node.classList.add("animation__position-right");
      setTimeout(() => {
        node.classList.remove("animation__position-right");
        node.remove();
      }, 1200);
    });

  return node;
}

// abrir,cerrar y guardar formulario de cards
function animationsForCardsAndForm() {
  buttonAdd.addEventListener("click", () => {
    card.classList.add("animation__show");
    cardContainer.classList.add("animation__scale");
  });
}

function toggleFormCardReverse() {
  card
    .querySelector(".create-card__overlay")
    .classList.add("animation__show-reverse");
  cardContainer.classList.add("animation__position-right");

  setTimeout(() => {
    card
      .querySelector(".create-card__overlay")
      .classList.remove("animation__show-reverse");
    card.classList.remove("animation__show");
    cardContainer.classList.remove("animation__position-right");
  }, 1300);
}
buttonCloseCard.addEventListener("click", () => {
  toggleFormCardReverse();
});

cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  toggleFormCardReverse();
  animationsForCardsAndForm();
  CreateCards(InputNameCard.value, inputImageCard.value);

  inputImageCard.value = "";
  InputNameCard.value = "";
});

animationsForCardsAndForm();
