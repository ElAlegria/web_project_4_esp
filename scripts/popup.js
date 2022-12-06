
const popup = document.querySelector(".popup");
const popupOverlay = popup.querySelector(".popup__overlay");
const popupContainer = popup.querySelector(".popup__container");
const buttonClose = popup.querySelector(".popup__close-icon");
const arrayPrueba = [];
const buttonEdit = document.querySelector(".profile__edit-button");

function toggleForm(Object,content) {
  Object.classList.add("animation__show");
  content.classList.add("animation__scale");
}

buttonEdit.addEventListener("click", ()=>{
  toggleForm(popup,popupContainer)
});
buttonClose.addEventListener("click", () => {
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
});

const inputName = popupContainer.querySelector(".popup__name");
const inputJob = popupContainer.querySelector(".popup__job");

const profileName = document.querySelector(".profile__name");
const profielJob = document.querySelector(".profile__job");

popupContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profielJob.textContent = inputJob.value;

  arrayPrueba.push(profielJob + profileName);
  toggleFormCardReverse(popup, popupContainer, popupOverlay);
  inputName.value = "";
  inputJob.value = "";
});
