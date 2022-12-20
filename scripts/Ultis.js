//open form
export function toggleForm(Object, content) {
  Object.classList.add("animation__show");
  content.classList.add("animation__scale");
}

//close form
export function toggleFormCardReverse(object, content, overlay) {
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
export function animationJoinCard(cardUp, cardleft, cardback) {
  cardUp.classList // .querySelector(".cards__image")
    .add("animation__join-up");
  cardleft.classList // .querySelector(".cards__remove")
    .add("animation__join-left");
  cardback.classList // .querySelector(".cards__content")
    .add("animation__join-back");
}

//open image modal
export function openImageModal(imageName, imageBig, link, title) {
  imageName.classList.add("animation__join-back");
  imageBig.src = link;
  imageName.textContent = title;
}

//close image
export function closeImageModal(ButtonClose, imageName) {
  imageName.classList.remove("animation__join-back");
  ButtonClose.classList.add("animation__show-reverse");
  imageName.classList.add("animation__show-reverse");
  setTimeout(() => {
    ButtonClose.classList.remove("animation__show-reverse");
    imageName.classList.remove("animation__show-reverse");
  }, 1200);
}

export function elementDisabled(elementDisabled) {
  elementDisabled.disabled = true;
  elementDisabled.classList.add("form__button_disabled");
}


export function elementClose(evt){
  if (evt.keyCode === 27 ) {
    toggleFormCardReverse(object, content, overlay)  }
}
