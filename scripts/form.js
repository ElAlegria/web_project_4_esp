let popup = document.querySelector(".popup")
let profile = document.querySelector(".profile")

const ButtonformOpen = profile.querySelector(".profile__edit-button");
const ButtonformClose = popup.querySelector(".popup__close-icon");


function open(){
    popup.classList.add("show");
}

function close(){
    popup.classList.remove("show");
}

ButtonformOpen.addEventListener("click",open);
ButtonformClose.addEventListener("click",close);

// // console.log(form)
// // console.log(profile)


