//open form
export const toggleForm = (Object, content) => {
  Object.classList.add("animation__show");
  content.classList.add("animation__scale");
}

//close form
export const toggleFormCardReverse = (object, content, overlay) => {
  overlay.classList.add("animation__show-reverse");
  content.classList.add("animation__position-right");
  content.classList.remove("animation__scale");
  setTimeout(() => {
    overlay.classList.remove("animation__show-reverse");
    object.classList.remove("animation__show");
    content.classList.remove("animation__position-right");
  }, 1100);
}

//animation creation cards
export  const animationJoinCard = (cardUp, cardLeft, cardBack) => {
  cardUp.classList // .querySelector(".cards__image")
    .add("animation__join-up");
  cardLeft.classList // .querySelector(".cards__remove")
    .add("animation__join-left");
  cardBack.classList // .querySelector(".cards__content")
    .add("animation__join-back");
}

//function Image modal
  //open image modal
export const openImageModal = (imageName, imageBig, link, title) => {
  imageName.classList.add("animation__join-back");
  imageName.textContent = title;
  imageBig.src = link;
}

  //close image
export const closeImageModal = (ButtonClose, imageName, imageBig) => {
  imageName.classList.remove("animation__join-back");
  ButtonClose.classList.add("animation__show-reverse");
  imageName.classList.add("animation__show-reverse");
  setTimeout(() => {
    ButtonClose.classList.remove("animation__show-reverse");
    imageName.classList.remove("animation__show-reverse");
    imageName.textContent = "";
    imageBig.src = "";
  }, 1200);
}

//function form validity
  //function delate class input
export function delateClassInput(forms) {
  forms.querySelectorAll(".form__input").forEach((event) => {
    const messageError = forms.querySelector(
      ".form__input-error_" + event.name
    );
    event.classList.remove("form__input_valid","form__input__invalid")
    messageError.classList.remove("form__input-error_valid","form__input-error_invalid");
  });
}

  //function disable button
export const elementDisabled = (elementDisabled) =>{
  elementDisabled.disabled = true;
  elementDisabled.classList.add("form__button_disabled");
}
//function close keyboard
export const KeyHandle = (object, content, overlay) =>{
  window.addEventListener("keydown",function(e){
    if (e.key === "Escape") {
      toggleFormCardReverse(object, content, overlay);
    }
  });
}