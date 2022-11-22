const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const buttonClose = popup.querySelector(".popup__close-icon");

const buttonEdit = document.querySelector(".profile__edit-button");

function toggleForm() {
  popup.classList.toggle("popup__show");
  popupContainer.classList.toggle("popup__scale");
}

buttonEdit.addEventListener("click", toggleForm);
buttonClose.addEventListener("click", toggleForm);

const inputName = popupContainer.querySelector(".popup__name");
const inputJob = popupContainer.querySelector(".popup__job");

const profileName = document.querySelector(".profile__name");
const profielJob = document.querySelector(".profile__job");

function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profielJob.textContent = inputJob.value;

  toggleForm();
}

popupContainer.addEventListener("submit", handleProfileFormSubmit);
