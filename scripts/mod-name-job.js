let popupContaine = document.querySelector(".popup"); 
let Buttonsubmit = document.querySelector(".popup__button");
let nameinput = popupContaine.querySelector(".popup__name");
let jobinput = popupContaine.querySelector(".popup__job");
let  profileName = document.querySelector(".profile__name");
let profilejob = document.querySelector(".profile__job"); 


function HandleProfileFormSubmit(evt){

    evt.preventDefault();

    profileName.textContent = nameinput.value;
    profilejob.textContent = jobinput.value;

}

popupContaine.addEventListener("submit",HandleProfileFormSubmit);
