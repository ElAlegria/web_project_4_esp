//open form
export function toggleForm(Object,content) {
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

