const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const buttonClose = popup.querySelector(".popup__close-icon");
const arrayPrueba = [

]
const buttonEdit = document.querySelector(".profile__edit-button");

function toggleForm() {
  popup.classList.toggle("animation__show");
  popupContainer.classList.toggle("animation__scale");
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

  arrayPrueba.push(profielJob + profileName);
  toggleForm();
}

popupContainer.addEventListener("submit",()=>{
  handleProfileFormSubmit(event);
  inputName.value = "";
  inputJob.value = "";
});
