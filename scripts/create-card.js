//formulario para modificar las cards
const card = document.querySelector(".create-card");
const cardOverlay = card.querySelector(".create-card__overlay");
const cardContainer = card.querySelector(".create-card__container");
const buttonCloseCard = card.querySelector(".create-card__close-icon");
const buttonAdd = document.querySelector(".profile__add-button");
const inputImageCard = cardContainer.querySelector(".create-card__image");
const InputNameCard = cardContainer.querySelector(".create-card__name");
const usuarioCards = document.querySelector(".cards");
//image modal
const image = document.querySelector(".image");
const imageContainer = image.querySelector(".image__container")
const imageBig = document.querySelector(".image__imagen-big");
const imageName = image.querySelector(".image__name")
const imageOverlay = image.querySelector(".image__overlay");
const imageButtonClose = image.querySelector(".image__close-button");

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

//sintaxis generate cards
const CardsSave = [];

initialCards.map(function (cardsinicio) {
  CreateCards(cardsinicio.name, cardsinicio.link);
});

function CreateCards(titleValue, linkValue) {
  const cardTemplate = document
    .querySelector(".cards-template")
    .content.querySelector(".cards__card");

  const node = cardTemplate.cloneNode(true);

  node.querySelector(".cards__title").textContent = titleValue;
  node.querySelector(".cards__image").src = linkValue;

  usuarioCards.append(node);
  CardsSave.push(node);

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

  //open image modal
  node.querySelector(".cards__image").addEventListener("click", function () {
    imageBig.src = linkValue;
    imageName.textContent = titleValue;
    toggleForm(image, imageBig);

  });

  //close image
  imageButtonClose.addEventListener("click", function () {
    toggleFormCardReverse(image, imageBig, imageOverlay);
    imageButtonClose.classList.add("animation__show-reverse");
    setTimeout(() => {
      imageButtonClose.classList.remove("animation__show-reverse");
    }, 1200);
  });
  return node;
}

// open/close form card
function toggleFormCardReverse(object, content, overlay) {
  overlay.classList.add("animation__show-reverse");
  content.classList.add("animation__position-right");
  content.classList.remove("animation__scale");
  setTimeout(() => {
    overlay.classList.remove("animation__show-reverse");
    object.classList.remove("animation__show");
    content.classList.remove("animation__position-right");
  }, 1100);
}
buttonAdd.addEventListener("click", () => {
  toggleForm(card, cardContainer);
});
buttonCloseCard.addEventListener("click", () => {
  toggleFormCardReverse(card, cardContainer, cardOverlay);
});
//save card
cardContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  toggleFormCardReverse(card, cardContainer, cardOverlay);
  CreateCards(InputNameCard.value, inputImageCard.value);

  inputImageCard.value = "";
  InputNameCard.value = "";
});
