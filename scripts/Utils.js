import Popups from "./Popups/popup.js";
import PopupWithImage from "./Popups/PopupWithImage.js";

//!important

//!generate popups
export function generatePopup(Element) {
  const generatePopup = new Popups(Element);
  return generatePopup.setEventListeners();
}
//!generate Modal Popup
export function modalPopup (newElement,data,imagePopup){
  const generateModalPopup = new PopupWithImage(data, imagePopup);
  generateModalPopup.setEventListeners(newElement);
}
//*function Image modal
//?open image modal
 export const openImageModal = (imageName) => {
   imageName.classList.add("animation__join-back");
 };

 //?close image
 export const closeImageModal = (ButtonClose, imageName) => {
   imageName.classList.remove("animation__join-back");
   ButtonClose.classList.add("animation__show-reverse");
   imageName.classList.add("animation__show-reverse");
   setTimeout(() => {
     ButtonClose.classList.remove("animation__show-reverse");
     imageName.classList.remove("animation__show-reverse");
   }, 1200);
 };

 //! Open/close
//?open
export const openElement = (object, container) => {
  object.classList.add("animation__show");
  container.classList.add("animation__scale");
};

//?close
export const closeElement = (object, content, overlay) => {
  overlay.classList.add("animation__show-reverse");
  content.classList.add("animation__position-right");
  content.classList.remove("animation__scale");
  setTimeout(() => {
    overlay.classList.remove("animation__show-reverse");
    object.classList.remove("animation__show");
    content.classList.remove("animation__position-right");
  }, 1100);
};

//!create Card animations
//?animation creation cards
export const animationJoin = (elementUp, elementLeft, elementBack) => {
  elementUp.classList // .querySelector(".cards__image")
    .add("animation__join-up");
  elementLeft.classList // .querySelector(".cards__remove")
    .add("animation__join-left");
  elementBack.classList // .querySelector(".cards__content")
    .add("animation__join-back");
};

//?function delate class input
export function delateClassInput(forms) {
  forms.querySelectorAll(".form__input").forEach((event) => {
    const messageError = forms.querySelector(
      ".form__input-error_" + event.name
    );
    event.classList.remove("form__input_valid", "form__input__invalid");
    messageError.classList.remove(
      "form__input-error_valid",
      "form__input-error_invalid"
    );
  });
}

//!form button disabled
//?function disable button
export const elementDisabled = (elementDisabled) => {
  elementDisabled.disabled = true;
  elementDisabled.classList.add("form__button_disabled");
};
//?function close keyboard
export const KeyHandle = (object, content, overlay) => {
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeElement(object, content, overlay);
    }
  });
};
