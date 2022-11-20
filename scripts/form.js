let popup = document.querySelector(".popup")
let profile = document.querySelector(".profile")

const ButtonformOpen = profile.querySelector(".profile__edit-button");
const ButtonformClose = popup.querySelector(".popup__close-icon");

ButtonformOpen.addEventListener("click",open);

ButtonformClose.addEventListener("click",close)

function open(){
    popup.classList.add("show");
}

function close(){
    popup.classList.remove("show");
}

// // console.log(form)
// // console.log(profile)

// function handleProfilefileFormSubmit(evt) {
    
//       evt.preventDefault(evt);

//     let nameinput= form.querySelector(".form__name");
//     let jobinput= form.querySelector(".form__job");

//     let Profilename = profile.querySelector(".profile__name");
//     let profilejob = profile.querySelector(".profile__job");




//     //  console.log(nameinput);
//     //  console.log(jobinput);
//     //  console.log(Profilename);
//     //  console.log(profilejob);
// }

//      handleProfilefileFormSubmit();

