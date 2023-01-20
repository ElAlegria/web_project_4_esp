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

//open image modal
export const openImageModal = (imageName, imageBig, link, title) => {
  imageName.classList.add("animation__join-back");
  imageBig.src = link;
  imageName.textContent = title;
}

//close image
export const closeImageModal = (ButtonClose, imageName) => {
  imageName.classList.remove("animation__join-back");
  ButtonClose.classList.add("animation__show-reverse");
  imageName.classList.add("animation__show-reverse");
  setTimeout(() => {
    ButtonClose.classList.remove("animation__show-reverse");
    imageName.classList.remove("animation__show-reverse");
  }, 1200);
}

export const elementDisabled = (elementDisabled) =>{
  elementDisabled.disabled = true;
  elementDisabled.classList.add("form__button_disabled");
}

export const KeyHandle = (object, content, overlay) =>{
  window.addEventListener("keydown",function(e){
    if (e.key === "Escape") {
      toggleFormCardReverse(object, content, overlay);
    }
  });
}