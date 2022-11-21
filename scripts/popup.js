const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const ButtonClose = popup.querySelector(".popup__close-icon");

const ButtonEdit = document.querySelector(".profile__edit-button");

function toggleForm() {
  popup.classList.toggle("popup__show");
  popupContainer.classList.toggle("popup__scale");
}

ButtonEdit.addEventListener("click", toggleForm);
ButtonClose.addEventListener("click", toggleForm);

const inputname = popupContainer.querySelector(".popup__name");
const inputjob = popupContainer.querySelector(".popup__job");

const ProfileName = document.querySelector(".profile__name");
const ProfielJob = document.querySelector(".profile__job");

function handleProfileFormSubmit(event) {
  event.preventDefault();

  ProfileName.textContent = inputname.value;
  ProfielJob.textContent = inputjob.value;

  toggleForm();
}

popupContainer.addEventListener("submit", handleProfileFormSubmit);
